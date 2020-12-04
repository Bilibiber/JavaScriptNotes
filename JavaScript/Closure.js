// Closure
// https://github.com/lgwebdream/FE-Interview/issues/17

// What is Closure？
// Js中有对Scope的定义和其他的语言不太一样， lexical scope,
// 这就意味着在一个特定的scope中，里面会自动获得 access 外部的所有 props,
// 但是外部无法对内部的 props 进行访问

let outer = 10;

function add() {
  let inner = 20;
  console.log();
  return inner + outer; // outer 可以直接被调用
}

console.log(add()); // return 30
//console.log(inner); // 报错， inner is undefined

// so what is closure?
// closure is a special scope, that holds variable the function gonna use
// and makes them available outside

// 个人理解： 闭包是一种特殊区间，这个区间会包含某个函数将要用到的变量， 并让这些变量在其他地方也可以使用
// 变量是独立存在的， 每一个单独的闭包会有自己的变量.
// 形成的条件就是你有一个 functionA
// 并且该functionA 会返回另外一个functionB, functionB 中需要用到 functionA 中的变量

let functionA;

function OuterFunction() {
  let innerData = "Hi";
  return function (...data) {
    console.log(innerData + " Mason");
    console.log(...data);
  };
}

functionA = OuterFunction();
functionA("called", "haha");
// innerData still accessible here, innerData is inside a closure
