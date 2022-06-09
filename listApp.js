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
});

//to display Task
let displayTask= () => {
    let taskListEl=document.querySelector("#task-list");
    let taskList = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
    if(taskList.length !== 0){
        let eachTask = "";
        for(let task of taskList){
            eachTask +=` <li class="list-group-items list-group-item-action list-group-item-warning">
            <span class="font-weight-bold">${task}</span>
            <button class="close btn-outline-primary">
                <i class="fa fa-times-circle m-1" value="close"></i>
            </button>
            </li>`
        };
        taskListEl.innerHTML = eachTask;
    }
};
displayTask();