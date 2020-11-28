function Father() {
  this.property = true;
}

Father.prototype.getFatherValue = function () {
  return this.property;
};

function Son() {
  this.sonProperty = false;
}

console.log(Son.prototype.constructor);

//继承 Father
// Son.prototype = Object.create(Father.prototype);
// Son.prototype.constructor = Son;
Son.prototype = new Father();
//Son.prototype被重写,导致Son.prototype.constructor也一同被重写

console.log(Son.prototype.constructor);

Son.prototype.getSonValue = function () {
  return this.sonProperty;
};
var instance = new Son();
console.log(instance.getFatherValue()); //true
console.log(instance.getSonValue());
