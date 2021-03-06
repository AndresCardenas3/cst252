/*
* Author: Andres Cardenas <ancardenas@csumb.edu>
* Created: 23 March
* License: Public Domain
*/

// print all numbers from 1-200
for (let i = 1; i <= 200; i++) {

    var buildStr = "";
    // If the number is a multiple of 3,
    // print “Fizz” instead of the number.
    if (i % 3 == 0) {
        buildStr += "Fizz";
    }
    // If the number is a multiple of 5,
    // print “Buzz” instead of the number.
    if (i % 5 == 0) {
        buildStr += "Buzz";
    }
    // If the number is a multiple of 7,
    // print “Boom” instead of the number.
    if (i % 7 == 0) {
        buildStr += "Boom";
    }

    if (buildStr != "") {
        console.log(buildStr + "!");
        $("#output").append("<p>" + buildStr + "!");
    }
    else {
        console.log(i);
        $("#output").append("<p>" + i);
    }
}
