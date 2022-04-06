/*
 * Author: Andres Cardenas <ancardenas@csumb.edu>
 * Created: 6 April
 * License: Public Domain
 */

function Vehicle(make, model, year, color, extras, name) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.extras = extras;
  this.name = name;
  this.info = function() {
    var str = "A " + color + " " + year + " " + make + " " + model + " that is a " + extras + " called " + name + ".";
    return str;
  }
}

var vehicles = [];

vehicles.push(new Vehicle("Volkswagen", "Jetta", 2013, "white", "sedan", "my car"));
vehicles.push(new Vehicle("Fiat", "500x", 2015, "black", "crossover", "my sister's car"));
vehicles.push(new Vehicle("Honda", "Accord", 2018, "black", "sedan", "my dad's car"));
vehicles.push(new Vehicle("Tesla", "Model S", 2020, "white", "sedan", "my mom's car"));

outputEl = document.getElementById("output");
for (var i = 0; i<vehicles.length; i++) {
  $("#output").append("<li>" + vehicles[i].info())
}
