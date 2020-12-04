// https://github.com/lgwebdream/FE-Interview/issues/7

//把这个变成一个 constructor的形式，方便调用
var myInterVal = function (fn, a, b) {
  this.counter = -1;
  this.timer;

  this.start = () => {
    // setTimeout 只运行一次
    // 把setTimeout 赋值给timer 方便之后 clearSetTimeout
    this.timer = setTimeout(() => {
      // 运行fn()
      fn();
      // 增加b的倍数
      this.counter++;
      //让增加的秒数可视化
      console.log(a + b * this.counter);
      // 重新执行，实现无限循环
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

//runner.start();

// 终止循环 runner.stop()

// V2
function InterVal(fn, a, b) {
  let count = -1;
  let timer;
  let timeOut = () => {
    timer = setTimeout(() => {
      fn();
      count++;
      console.log("timeOut:>> ", a + b * count);
      timeOut();
    }, a + b * count);
  };
  timeOut();
  return () => {
    clearTimeout(timer);
  };
}

var Start = InterVal(
  () => {
    console.log("InterVal Called");
  },
  1000,
  2000
);

setTimeout(() => {
  Start();
  console.log("Interval ended");
}, 10000);
