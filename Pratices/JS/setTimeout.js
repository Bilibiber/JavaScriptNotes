// https://github.com/lgwebdream/FE-Interview/issues/7

//把这个变成一个 constructor 方便调用method
var myInterVal = function (fn, a, b) {
  this.counter = 0;
  this.timer;

  this.start = () => {
    // setTimeout 只运行一次
    this.timer = setTimeout(() => {
      fn();
      this.counter++;
      console.log(a + b * this.counter);
      this.start();
    }, a + b * this.counter);
  };
  this.stop = () => {
    clearTimeout(this.timer);
  };
};

console.log("Function start");

var runner = new myInterVal(
  () => {
    console.log("called");
  },
  1000,
  2000
);

runner.start();
