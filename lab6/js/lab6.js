/**
* Author: Andres Cardenas <ancardenas@csumb.edu>
* Created: 20 Feburary
* License: Public Domain
*/

// Define Variables
myTransport = ["Volkswaggen Jetta", "Southwest Airlines", "BART", "Nike Air Force 1s"];

myMainRide = {
    make: "Volkswaggen",
    model: "Jetta",
    color: "white",
    year: "2013",
    age: function() {
        return 2022 - this.year;
    }
}

// output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
