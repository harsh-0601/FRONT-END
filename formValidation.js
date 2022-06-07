//Form Validation
let registrationForm=document.querySelector("#registration-form");
registrationForm.addEventListener("submit", function(event){
    event.preventDefault();
    validateForm();
});

let validateForm = () => {
    checkUserName();
}

let checkUserName = () =>{
    let inputEl=document.querySelector("#username");
    let feedBackEl=document.querySelector("username-feedback");
    let regExp = /^[a-zA-Z0-9]{4,10}$/;
    if(regExp.test(inputEl.value)){
        makeValid(inputEl,feedBackEl);
    }
    else{
        makeInValid(inputEl,feedBackEl);
    }
};

let makeValid = (inputEl,feedBackEl) => {
    inputEl.classList.add("is-form-valid");
    inputEl.classList.remove("is-form-invalid");
    feedBackEl.classList.add("text-sucess");
    feedBackEl.classList.remove("text-danger");
    feedBackEl.innerText="GOOD";
}


let makeInValid = (inputEl,feedBackEl)=> {
    inputEl.classList.remove("is-form-valid");
    inputEl.classList.add("is-form-invalid");
    feedBackEl.classList.remove("text-sucess");
    feedBackEl.classList.add("text-danger");
    feedBackEl.innerText=`Please Enter a ${inputEl.placeholder}`;
}
