/*
* Author: Andres Cardenas <ancardenas@csumb.edu>
* Created: 27 Feburary
* License: Public Domain
*/

// isOdd - a function that takes numbers and outputs if it is true or false that the number is odd

function isOdd(x){
    return(x % 2 !== 0);
}

// test function
console.log("Is 1 Odd? ", isOdd(1));
console.log("Is 2 Odd? ", isOdd(2));

array = [7, 21, 23, 30, 47, 100, 222, 444]
console.log("My array", array);

var result = array.map(isOdd);
// should return [true, true, true, false, true, false, false, false]
console.log("Test of oddness of array:", result);

var result = array.map(function(x){
  return x * 2;
})

// should return [14, 42, 46, 60, 200, 444, 888]
console.log("Array mulitplied by 2:", result);

// function to add text to given element
function main() {
 // get element by id
 outputElement = document.getElementById("js-output");
 // change contents of element
 outputElement.innerHTML = "I can't get my output to display on my webpage, so I made this instead. Look in the console to see the output.";
}
