var reverse = (x) => {
  let numsString = x.toString();
  let reversedString = "";
  let result;
  const isNegative = x < 0;
  if (isNegative) numsString = numsString.replace("-", "");
  for (let i = numsString.length; i > 0; i--) {
    if (numsString.charAt(i - 1) != "0")
      reversedString = reversedString + numsString.charAt(i - 1);
    if (numsString.charAt(i - 1) == "0" && reversedString.length != 0)
      reversedString = reversedString + numsString.charAt(i - 1);
  }
  result = Number(reversedString);
  return isNegative ? -result : result;
};

console.log(reverse(-1203));
