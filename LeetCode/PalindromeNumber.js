var isPalindrome = function (x) {
  const isNegative = x < 0;
  if (isNegative) return false;
  let numberString = x.toString();
  let result = "";
  for (let i = numberString.length; i > 0; i--) {
    result = result + numberString.charAt(i - 1);
  }
  console.log("result :>> ", result);
  if (result == numberString) return true;
  else return false;
};

console.log(isPalindrome(-121));
