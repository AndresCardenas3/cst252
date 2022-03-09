/*
* Author: Andres Cardenas <ancardenas@csumb.edu>
* Created: 9 March
* License: Public Domain
*/

//this is how you make a button in jQuery
$("#output").append("<button id=my-button>Cool Green Button");
$("#my-button").css("background-color","lightgreen");
$("#my-button").css("font-family","limerick-serial-heavy, helvetica");
$("#my-button").click(function(){
  alert("This alert was made using jQuery");
})
