"use strict";
var Car = function (color) {
  this.color = color;
};

let BMW = new Car("red");

console.log("BMW :>> ", BMW.color);

let aArray = [1, 2, 3, 4];

console.log(Array.prototype.isPrototypeOf(aArray));
