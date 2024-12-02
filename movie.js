document.getElementById("start").style.color="green"
let b = document.forms["post"];
let text = '';
for(let i=0; i<b.length; i++) {
    text+=b.elements[i].name +'<br>';
}

let btn = document.querySelector('.click-button');
let message = document.querySelector('h4')
btn.addEventListener('click', () =>{
 btn.innerText = 'Miss Me !!';
});
document.getElementById("eme").style.color="indigo" 

document.getElementById("neto").innerHTML = "Bombo Clat";

/*const x = document.getElementById("eme");
const y = document.getElementsByTagName("h3");
document.getElementById("eme").innerHTML = 'In the beninging ' + y[0].innerHTML;*/
/*function changeText(){
    document.getElementById("neto").textContent = "youhuu!!"
}
function changeBackgroundColor() {
    document.getElementById("atmost").style.backgroundColor = "yellow"
    
}*/
/*function addItem() {
    const lise= document.createElement("li")
    lise.textContent="a one"
    document.getElementById("why").appendChild(lise)
}*/
/*function showVisibility() {
    let can = document.getElementById("container")
    can.style.visibility='hidden'
}
function hideVisibility() {
    let nox = document.getElementById("container")
    nox.style.visibility='visible'
}*/
function changeFontSize() {
    document.getElementById("ibaze").style.fontSize = "70%"
}
document.getElementById("date").onclick = displayDate;
function displayDate(){
    document.getElementById("show").innerHTML= Date();
}
