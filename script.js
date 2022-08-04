let inputNum = "110";

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

const hundreds = [" hundred "]

const thousands = [" thousand "]

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
  console.log(
    doubles[Number(inputNum[0])] + " " + singles[Number(inputNum[1])]
  );
}
// check for numbers between 100 and 999
else if (inputNum.length == 3) {
  // check for 100 teen number
  if (inputNum[1] == 1) {
    console.log(
      singles[Number(inputNum[0])] + hundreds[0] + teens[Number(inputNum[2])]
    );
  }
  // if 0 in middle
  else if (inputNum[1] == 0) {
    console.log(
      singles[Number(inputNum[0])] + hundreds[0] + singles[Number(inputNum[2])]
    );
  }
  // if 0 at end
  else if (inputNum[2] == 0) {
    console.log("hi");
    console.log(
      singles[Number(inputNum[0])] + hundreds[0] + doubles[Number(inputNum[1])]
    );
  } else {
    console.log(
      singles[Number(inputNum[0])] +
        hundreds[0] +
        doubles[Number(inputNum[1])] +
        " " +
        singles[Number(inputNum[2])]
    );
  }
} else if (inputNum.length == 4) {
  console.log("a thousand number");
} else if (inputNum.length == 5) {
  console.log("a ten thousand number");
} else if (inputNum.length == 6) {
  console.log("a hundred thousand number");
} else if (inputNum.length == 7) {
  console.log("a million number");
}