// New keyword 在js中可以用来定义一个新的自建的 object

function Car(brand, color) {
  this.brand = brand;
  this.color = color;
}

var CarOne = new Car("BMW", "White");

console.log("CarOne", CarOne);
