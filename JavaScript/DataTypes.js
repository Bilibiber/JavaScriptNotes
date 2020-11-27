var aNumber = 1;

var aString = "Hello World";

var aUndefined;

var aNull;

var aBoolean = false;

var aBigInt;
// 用做高精度运算

var aSymbol;

// 一种特殊的数据类型，每一个symbol都是特殊的，
// 比如说 我们比较 两个创建过程一样的 Symbol得到的结果是false 因为每一个symbol都是特殊的。
// 常规的网页编程用不到,知道这个是什么就行

var aObject = {
  name: "I'm a object",
};

var aFunction = function () {
  return "I'm a function";
};

var aArray = ["Im a array", "Im array2"];

// log undefined
console.log(aUndefined);

//因为我没有给这个变量赋值，并且他是用var来创建的。
//在JS中你还是可以正常的调用，但值会变成Undefined. JS hoisting

//Type of
console.log("//typeof property");
console.log("aFunction is type of", typeof aFunction);
console.log("aObject is type of", typeof aObject);
// 一般用来验证，被传入的参数是否正确. 被调用时会返回相应的数据类型

// Constructor
console.log("//constructor property");
console.log("Object.Constructor:", aObject.constructor);
console.log("Array.Constructor", aArray.constructor);
// to check if some thing is a array, we can use constructor property

// 数据类型间的转换 https://www.w3schools.com/js/js_type_conversion.asp
// toString() 杀穿一切

// If the variable cannot be converted,
//it will still become a number, but with the value NaN (Not a Number):
console.log("//NaN a.k.a Not a number");
var aString = "Hello World";
var aNaN = +aString;
console.log(aNaN); // but the type will be a number

//无用的小知识
// when converting boolean false will be return 0, true will be return 1
console.log("Converting false to number", Number(false));
console.log("Converting true to number", Number(true));
