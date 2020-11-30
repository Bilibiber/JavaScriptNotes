// New keyword 在js中可以用来定义一个新的自建的 object
// 基本语法 new  constructor ([arguments])

function Car(brand, color) {
  this.brand = brand;
  this.color = color;
  this.name = "TEST";
}

Car.prototype.print = function () {
  return "Print our from Car object";
};

var CarOne = new Car("BMW", "White");

// New keyword process
// 1. create a empty object
// 2. object.prototype = oldObject.prototype on the left side
// 3. you get access to props and method in prototype

console.log("CarOne", CarOne.name);
