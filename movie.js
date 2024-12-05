document.getElementById("start").style.color = "green";
let b = document.forms["post"];
let text = "";
for (let i = 0; i < b.length; i++) {
  text += b.elements[i].name + "<br>";
}

let btn = document.querySelector(".click-button");
let message = document.querySelector("h4");
btn.addEventListener("click", () => {
  btn.innerText = "Miss Me !!";
});
document.getElementById("eme").style.color = "indigo";

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
function addItem() {
  const lise = document.createElement("li");
  lise.textContent = "a one";
  document.getElementById("why").appendChild(lise);
}

let pivo = document.getElementById("container");
pivo.style.visibility = "hidden";

function hideVisibility() {
  let nox = document.getElementById("container");
  nox.style.visibility = "visible";
}
function changeFontSize() {
  document.getElementById("ibaze").style.fontSize = "70%";
}

const element = document.getElementById("neto")
element.remove
function mouseOver(){
    document.getElementById("date").style.color="blue"
}
function showDate() {
  document.getElementById("date").innerHTML = Date();
}
function removeDate() {
  document.getElementById("date").innerText = "Wanna see the date ??";
}
document.getElementById("make").innerHTML =document.getElementById("neto").nodeName
//document.getElementById('make').innerHTML = document.body.innerHTML;
const par = document.createElement("p");
const node = document.createTextNode("WATAGUAN");
par.append(node);
const eleme = document.getElementById("sesi");
eleme.append(par);

// var theColors = ['red','blue','pink','orange', 'indigo','green', 'white']
// var it = document.getElementById('changing')
// var now = document.getElementById('colorz')
// let arr1 = 0
// now.addEventListener('click', function(){
//   it.style.color = theColors[arr1]
//   arr1=(arr1+1)%theColors.length
// })
// var s1 = document.getElementById('colorz')
// var s2 = document.getElementById('countee')
// var s3 = 0
// s1.addEventListener('click', ()=>{
//   s3++
//   s2.textContent = s3
// })
function showIt(){
  var zik= document.getElementById('changing')
  if(zik.style.display==='none'){
    zik.style.display='block'
  }else{
    zik.style.display='none'
  }
}
function bigIt(){
  document.getElementById('changing').style.fontSize = '70px'
}