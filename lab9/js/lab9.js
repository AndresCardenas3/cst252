/*
* Author: Andres Cardenas <ancardenas@csumb.edu>
* Created: 2 March
* License: Public Domain
*/

var outputEl = document.getElementById("output");
var oneEl = document.createElement("button");
var twoEl = document.createElement("button");

outputEl.appendChild(oneEl);
oneEl.id = "button1";
oneEl.innerHTML = "Don't Press Me";
oneEl.style.color = "red";

// this function turns all of the body text the same color as the background
button1.onclick = function(){
  outputEl.style.color = "cornsilk";
}

outputEl.appendChild(twoEl);
twoEl.id = "button2";
twoEl.innerHTML = "Press Me";
twoEl.style.color = "green";

// this function returns the body text to black
button2.onclick = function(){
  outputEl.style.color = "black";
}
