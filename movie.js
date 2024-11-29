document.getElementById("start").style.color="green"
let b = document.forms["post"];
let text = '';
for(let i=0; i<b.length; i++) {
    text+=b.elements[i].name +'<br>';
}

let btn = document.querySelector('button');
let message = document.querySelector('h4')
btn.addEventListener('click', () =>{
 btn.innerText = 'Miss Me !!';
});
document.getElementById("eme").style.color="gold" 

document.getElementById("neto").innerHTML = "Bombo Clat";

/*const x = document.getElementById("eme");
const y = document.getElementsByTagName("h3");
document.getElementById("eme").innerHTML = 'In the beninging ' + y[0].innerHTML;
