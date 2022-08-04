let inputNum = "25";

// decimals, maximum,

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

const doubles = ["", "", "twenty", "thirty", "fourty", "fifty", "sixty","seventy", "eighty", "ninety"]

const hundreds = ["hundred"]

const thousands = ["thousand"]

// check for single digits
if (inputNum.length == 1) {
  console.log(singles[Number(inputNum)]);
} 
// check for numbers between 10 and 19
else if (inputNum.length == 2 && Number(inputNum) < 20) {
  console.log(teens[Number(inputNum[1])]);
} 
// check for numbers between 20 and 99
else if (inputNum.length == 2 && Number(inputNum) > 19) {
  console.log(doubles[Number(inputNum[0])] + " " + singles[Number(inputNum[1])]);
}
// check for numbers between 100 and 999
else if (inputNum.length == 3){

}