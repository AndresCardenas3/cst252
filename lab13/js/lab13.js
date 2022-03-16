/*
* Author: Andres Cardenas <ancardenas@csumb.edu>
* Created: 16 March
* License: Public Domain
*/

// function to sort names into houses based on amount of letters
function sortingHat(name) {
    var len = name.length;
    var mod = len % 4;
    var houseStr;
    if (mod == 0) {
        houseStr = "Gryfindor";
    } else if (mod == 1) {
        houseStr = "Slytherin";
    } else if (mod == 2) {
        houseStr = "Hufflepuff";
    }else if (mod == 3) {
        houseStr = "Ravenclaw";
    }
    return houseStr;
}

$("#button").click(function(){

  var name = $("#input").val()
  var house = sortingHat(name);
  console.log(house);
  $("#output").html("The Sorting Hat has sorted you into: " + house);

});
