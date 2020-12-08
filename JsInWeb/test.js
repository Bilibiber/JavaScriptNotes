"use strict";
var Car = function (VIN, plate) {
  this.color = "gray";
  this.VIN = VIN;
  this.plate = plate;
};

Car.prototype.print = () => {
  return "Car's prototype";
};

var ToyCar = function () {
  Car.call(this, "1234", "BFEV");
};

ToyCar.prototype = Object.create(Car.prototype);

ToyCar.prototype.print = () => {
  return "From ToyCar";
};

let Quincy = new ToyCar();
console.log(Quincy);
