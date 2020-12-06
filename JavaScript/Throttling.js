// Debounce 防抖
// 避免某些关键event被点击多次给页面带来负面影响

// 需要 button 来更好的展现效果，
// 点击下面的链接，看看代码吧
// CodePen : https://codepen.io/Bilibiber/pen/eYdJzQd

const click = () => {
  console.log("Clicked");
};

var Debounce = (fn, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

var runner = Debounce(click, 2000);
runner();

//Throttling 节流 里面有注释
// V1 用的setTimeOut()
// CodePen:https://codepen.io/Bilibiber/pen/poEgWya

// V2 用的时间戳
// CodePen:https://codepen.io/Bilibiber/pen/NWRxgGO

var Throttling = (fn, delay) => {
  let now = Date.now();
  let last = 0;
  return function (...args) {
    if (now - last < delay) return;
    last = now;
    return fn(...args);
  };
};

// 个人觉得时间戳的方式更好一些， 因为用户可以直接得到反馈，不需要delay. 同时我们也有节流的效果
