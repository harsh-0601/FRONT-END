//Form Validation
let registrationForm=document.querySelector("#registration-form");
registrationForm.addEventListener("submit", function(event){
    event.preventDefault(); //for preventing autosubmit
    validateForm();
});

let validateForm = () => {
    checkUserName();
    checkEmail();
    checkPassword();
    confirmpassword();
};

//CHECK USERNAME
let checkUserName = () =>{
    let inputEl=document.querySelector("#username");
    let feedBackEl=document.querySelector("#username-feedback");
    let regExp = /^[a-zA-Z0-9]{4,10}$/;
    if(regExp.test(inputEl.value)){
        makeValid(inputEl,feedBackEl);
    }
    else{
        makeInValid(inputEl,feedBackEl);
    }
};

//CHECK EMAIL

let checkEmail = () =>{
    let inputEl=document.querySelector("#email");
    let feedBackEl=document.querySelector("#email-feedback");
    let regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(regExp.test(inputEl.value)){
        makeValid(inputEl,feedBackEl);
    }
    else{
        makeInValid(inputEl,feedBackEl);
    }
};

//CHECK PASSWORD
let checkPassword = () =>{
    let inputEl=document.querySelector("#password");
    let feedBackEl=document.querySelector("#password-feedback");
    // let regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{4,15}$/;
    let regExp=/^[A-Za-z]\w{7,14}$/;
    if(regExp.test(inputEl.value)){
        makeValid(inputEl,feedBackEl);
    }
    else{
        makeInValid(inputEl,feedBackEl);
    }
};

//Confirm PASSWORD
let confirmpassword = () =>{
    let inputEl=document.querySelector("#c_password");
    let feedBackEl=document.querySelector("#c_password-feedback");
    // let regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{4,15}$/;
    let regExp=/^[A-Za-z]\w{7,14}$/;
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
