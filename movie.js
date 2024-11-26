document.getElementById("start").style.color="green"
let b = document.forms["post"];
let text = '';
for(let i=0; i<b.length; i++) {
    text+=b.elements[i].name +'<br>';
}
document.getElementById("neto").innerHTML= text;