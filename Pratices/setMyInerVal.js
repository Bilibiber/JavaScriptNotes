var myInterval = (fn, a, b) => {
  let timer;
  let count = 0;
  const loop = () => {
    timer = setTimeout(() => {
      fn();
      count++;
      console.log("timeOut", a + count * b);
      loop();
    }, a + count * b);
  };
  loop();
  return function () {
    clearTimeout(timer);
    console.log("I'm Out");
  };
};

var Click = () => {
  console.log("Clicked");
};

var stopMe = myInterval(Click, 2000, 1000);

setTimeout(stopMe, 11000);
