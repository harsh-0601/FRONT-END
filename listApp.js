let taskFormEl= document.querySelector("#task-form");
taskFormEl.addEventListener("submit",function(){
    let taskInputEl=document.querySelector("#input-item");
    let task=taskInputEl.value.trim();
     // get task from local storage
     let taskList = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
     taskList.unshift(task);

    //Set to Local Storage 
     localStorage.setItem("tasks", JSON.stringify(taskList));
     displayTask();
     window.reload();
});

//to display Task
let displayTask= () => {
    let taskListEl=document.querySelector("#task-list");
    let taskList = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
    if(taskList.length !== 0){
        let eachTask = "";
        for(let task of taskList){
            eachTask +=`<li class="list-group-items list-group-item-action list-group-item-warning p-2">
            <span class="font-weight-bold">${task}
            <i class="fa fa-times-circle m-1 fa-lg" value="close"></i>
            </span>
            </li>`
        };
        taskListEl.innerHTML = eachTask;
    }
};
displayTask();

//To Delete A task
let taskListEl = document.querySelector("#task-list");
taskListEl.addEventListener("click",function(event){
    // console.log(event.target)
    let targetElement=event.target;
    if(targetElement.classList.contains("fa-times-circle")){
        let actualEl=targetElement.parentElement;
        let selectedTask=actualEl.innerText;    
        
        //To get from Local Storage
        let taskList = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")):[];
        taskList=taskList.filter(function(task){
        return task.trim() !== selectedTask.trim();
            });
    
    localStorage.setItem("tasks",JSON.stringify(taskList));
    displayTask();
    }
});
