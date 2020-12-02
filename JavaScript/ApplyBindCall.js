// Call
// Call allows you to use method or props from other props
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
var add = function (n3) {
  console.log(this.n1 + this.n2 + n3);
};

var num = {
  n1: 2,
  n2: 3
};

add.call(num, 3);
// num 是第一个pram, 通常refers this.
// "3" 是第二个pram就是add method需要用到的参数

// use method from array prototype
// slice me 不是一个 array, 通过call 我们就可以调用slice method
let notArray = function (sliceMe) {
  console.log([].slice.call(sliceMe.slice(1, 2)));
};

notArray("FanGuo"); // return ['a']

//Apply
// apply 和call最大的不同就是对参数的处理

var obj = {
  n1: 10,
  n2: 20
};

var mines = function (n3, n4) {
  console.log("result", this.n2 - this.n1 - n3 - n4);
};

mines.call(obj, 1, 2);
mines.apply(obj, [1, 2]);

// bind 也是一样的东西，不同的是你可以储存Bind 给之后调用，它会以一个 function的形式 被储存

var BindMe = mines.bind(obj, 1, 2);

// bind 会返回一个 function ， 所以我们可以直接调用
BindMe();
