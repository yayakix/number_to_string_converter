let inputNum = "9";

const singles = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const teens = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

const doubles = []

if (inputNum.length == 1){
    console.log(singles[Number(inputNum)])
}
else if (inputNum.length == 2){
console.log(teens[Number(inputNum[1])])
}