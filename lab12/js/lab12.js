/*
* Author: Andres Cardenas <ancardenas@csumb.edu>
* Created: 14 March
* License: Public Domain
*/


// find challenge button and add click handler
$("#challenge-button").click(function(){
	// remove blue class and orange
  $("#body-text").removeClass("blue").removeClass("orange");
	// toggle pink class for text
  $("#body-text").toggleClass("pink");
})


// find problems button and add click handler
$("#problems-button").click(function(){
	// remove pink class and orange class
  $("#body-text").removeClass("pink").removeClass("orange");
	// toggle blue class for text
  $("#body-text").toggleClass("blue");
})

// find results button and add click handler
$("#results-button").click(function(){
	// remove pink class and blue class
  $("#body-text").removeClass("pink").removeClass("blue");
	// toggle orange class for text
  $("#body-text").toggleClass("orange");
})
