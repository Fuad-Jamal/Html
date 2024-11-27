document.getElementById("start").style.color="green"
let b = document.forms["post"];
let text = '';
for(let i=0; i<b.length; i++) {
    text+=b.elements[i].name +'<br>';
}

let btn = document.querySelector('button');
let message = document.querySelector('h4')
btn.addEventListener('click,' ()=>{
 btn.innerText = 'Miss me!!';
 message.innerText= "wejn";
});
document.getElementById("eme").style.color="gold"