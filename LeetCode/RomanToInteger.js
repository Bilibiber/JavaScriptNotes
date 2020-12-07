//https://leetcode.com/problems/roman-to-integer/
var RomanToInteger = (s) => {
  const valueList = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (valueList[s[i]] < valueList[s[i + 1]]) sum -= valueList[s[i]];
    else sum += valueList[s[i]];
  }
  return sum;
};

console.log(RomanToInteger("III"));
