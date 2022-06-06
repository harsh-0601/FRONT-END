let numberEl=document.querySelector("#reg-number");
numberEl.addEventListener("keyup",function(){
    let theNumber=Number(numberEl.value);
    document.querySelector("#number").innerText=theNumber;
    calculate();
});

let rangeEl=document.querySelector("#multiplier");
    rangeEl.addEventListener("input",function(){
    let selectedMultiplier=Number(rangeEl.value);
    document.querySelector("#multi").innerText=selectedMultiplier;
    calculate();
});

// Calculation
let calculate= () =>{
    let num1=Number(document.querySelector("#number").innerText);
    let num2=Number(document.querySelector("#multi").innerText);
    let result= num1*num2;
    document.querySelector("#result").innerText=result;
}
