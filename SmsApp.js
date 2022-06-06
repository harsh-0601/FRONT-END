let textAreaEl=document.querySelector("#text-area")
let charCountEl=document.querySelector("#char-count")
textAreaEl.addEventListener("keyup",function(){
    let textLength=textAreaEl.value.length;
    charCountEl.innerText = textLength;
    if(textLength==100){
        alert("Cannot type more")
    }
});