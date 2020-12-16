function side(arr) {
  arr[0] = arr[2];
  console.log("arr :>> ", arr);
}
function a(a, b, c) {
  c = 10;
  console.log(arguments);
  side(arguments); // 这里 a，c的值不管怎么改变都是不会改变的
  console.log(arguments);
  return a + b + c;
}
console.log("object :>> ", a(1, 1, 1));

var a = 1;
(function a() {
  a = 2;
  console.log(a);
})();
