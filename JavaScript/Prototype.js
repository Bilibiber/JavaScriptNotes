//every function in java script have a prototype,
//举个例子 我们创建了 一个 function, 这个function 也是被一个其他的 prototype 创建的，
//还可以往上延申到最原始的顶层 （master object）。
//在这个过程中的任何method 都可以被最底层的 object 继承，
//这个也就是 prototype chain, 也是 JS 和 Java, C#这些语言的不同的地方。
//除此之外 为了让我们的object 小一点
//我们可以把所有的method用 ObjectName.prototype.methodName 的形式把function 外置。

// this is a constructor !!!
var Cars = function () {
  this.isCar = true;
};

// this is a prototype method but part of Cars
Cars.prototype.print = function () {
  return "This is print() from Cars Object";
};

// create another constructor
var VW = function (name) {
  // get all the props from Cars,
  // but we don't have access to prototype method at this point
  Cars.call(this);
  this.name = name;
};

// but we don't have access to print yet, run following code will crush your console
// console.log("Print Method", Tiguan.print());

// get access to prototype method
VW.prototype = Object.create(Cars.prototype);
VW.prototype.constructor = VW;

var Tiguan = new VW("Tiguan");

// after call method we have all the props from both VW and Cars
console.log(Tiguan);

// after prototype we have access to prototype method
console.log("Print Method", Tiguan.print());
