// let me write the line of code that changes the advice numbert every time you press the button 

let button= document.querySelector(".click");
let num= document.querySelector("#num"); // this is the 
let advice= document.querySelector(".advice-text");   //this is where the advice would be displayed 

button.addEventListener("click",getadvice );

// the function below fetches the data fromthe api 
async function getadvice(){
    let response= await fetch("https://api.adviceslip.com/advice");
    let data =  await response.json();
    num.textContent= data.slip.id;
    advice.textContent= '"'+ data.slip.advice +'"';

}

