// const singles = [
//   "",
//   "One",
//   "Two",
//   "Three",
//   "Four",
//   "Five",
//   "Six",
//   "Seven",
//   "Eight",
//   "Nine",
// ];

// const teens = [
//   "Ten",
//   "Eleven",
//   "Twelve",
//   "Thirteen",
//   "Fourteen",
//   "Fifteen",
//   "Sixteen",
//   "Seventeen",
//   "Eighteen",
//   "Nineteen",
// ];

// const doubles = [
//   "",
//   "",
//   "Twenty",
//   "Thirty",
//   "Fourty",
//   "Fifty",
//   "Sixty",
//   "Seventy",
//   "Eighty",
//   "Ninety",
// ];

// const hundreds = [" Hundred "];

// const thousands = [" Thousand "];

// // function to calculate 3 digit numbers
// function findHundred(inputNum) {
//   if (inputNum[1] == 1) {
//     return (
//       singles[Number(inputNum[0])] + hundreds[0] + teens[Number(inputNum[2])]
//     );
//   }
//   // if 0 in middle ex. 103
//   else if (inputNum[1] == 0) {
//     return (
//       singles[Number(inputNum[0])] + hundreds[0] + singles[Number(inputNum[2])]
//     );
//   }
//   // if 0 at end / ex.110
//   else if (inputNum[2] == 0) {
//     return (
//       singles[Number(inputNum[0])] + hundreds[0] + doubles[Number(inputNum[1])]
//     );
//   } else {
//     return (
//       singles[Number(inputNum[0])] +
//       hundreds[0] +
//       doubles[Number(inputNum[1])] +
//       " " +
//       singles[Number(inputNum[2])]
//     );
//   }
// }

// function findDoubles(inputNum) {
//   // check for numbers between 10 and 19
//   if (inputNum.length == 2 && Number(inputNum) < 20) {
//     return teens[Number(inputNum[1])];
//   }
//   // check for numbers between 20 and 99
//   else if (inputNum.length == 2 && Number(inputNum) > 19) {
//     return doubles[Number(inputNum[0])] + " " + singles[Number(inputNum[1])];
//   }
// }
// function findThousand(inputNum) {
//   // 1111
//   if (inputNum[1] != 0) {
//     return (
//       singles[Number(inputNum[0])] +
//       " Thousand " +
//       findHundred(inputNum.slice(1))
//     );
//   }
//   // 1011
//   else if (inputNum[1] == 0 && inputNum[2] != 0) {
//     return (
//       singles[Number(inputNum[0])] +
//       " Thousand " +
//       findDoubles(inputNum.slice(2))
//     );
//   }
//   // 1001
//   else if (inputNum[1] == 0 && inputNum[2] == 0) {
//     return (
//       singles[Number(inputNum[0])] +
//       " Thousand " +
//       singles[Number(inputNum.slice(3))]
//     );
//   }
// }

// function stringtoNum(inputNum) {
//   // check for single digits
//   if (inputNum.length == 1) {
//     return singles[Number(inputNum)];
//   } else if (inputNum.length == 2) {
//     return findDoubles(inputNum);
//   }
//   // check for numbers between 100 and 999
//   else if (inputNum.length == 3) {
//     return findHundred(inputNum);
//     // check for 100 teen number
//   }
//   // check thousands place
//   else if (inputNum.length == 4) {
//     return findThousand(inputNum);
//   }
// }

// // 1000
// // 1011
// // 1001
// // 1100
// // 1110
// // 1111

// // console.log(stringtoNum("5679"));

// const input = document.getElementById("input");
// const button = document.getElementById("button");
// const answer = document.getElementById("answer");

// button.addEventListener("click", function () {
//    convertedNum = stringtoNum(input.value)
//   answer.textContent = convertedNum
// });

