/*
* Author: Andres Cardenas <ancardenas@csumb.edu>
* Created: 23 Feburary
* License: Public Domain
*/

// sortUserName - a Function that takes user input and sorts the letters
// of their name
function sortUserName () {
  var userName = window.prompt("Hello! Enter your name and I will upgrade it.");
  console.log("userName =", userName);
  // split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  // sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  // join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

// Output
document.writeln("Congraulations! name upgrade has been completed: ",
  sortUserName(), "</br>");
