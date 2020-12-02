//every function in java script have a prototype,
//这个prototype 是JS 运行的时候自动加上去的，
//举个例子 我们创建了 一个 function, 这个function 是被上层的 function object 创建的，
//我们的function object, 还会有一个上层就是 master object 都会有一个props 叫 prototype，
//所以 我们才有了 在JavaScript 里 万物皆是 Object
//每个 prototype 还有自己的 props 和 method
//在这个过程中的任何method 都可以被最底层的 object 继承，
//这个也就是 prototype chain, 也是 JS 和 Java, C#这些语言的不同的地方。
//除此之外 为了让我们的object 小一点
//我们可以把所有的method用 ObjectName.prototype.methodName 的形式把function 外置。

// this is a constructor !!!
var Cars = function (name) {
  this.isCar = true;
  this.name = name;
};

// this is a prototype method but part of Cars
// Cars.prototype.print = function () {
//   return "This is print() from Cars Object";
// };

// create another constructor
var VW = function (name) {
  // get all the props from Cars,
  // but we don't have access to prototype method at this point
  Cars.call(this);
  // another way
  this.Lname = name;
};

// but we don't have access to print yet, run following code will crush your console
// console.log("Print Method", Tiguan.print());

// get access to prototype method
VW.prototype = Cars.prototype;
VW.prototype.constructor = VW;

//也可以直接写为
//VM.prototype = new Cars;

// to override a prototype method we have to do this after prototype inheritance
VW.prototype.print = function () {
  return "This is print() from  VW";
};

// Object.prototype.print = function () {
//   return "This is Print from Master object";
// };

var Tiguan = new VW("Tiguan");

// after call method we have all the props from both VW and Cars
console.log(Tiguan);

// after prototype we have access to prototype method
console.log("Print Method", Tiguan.print());
