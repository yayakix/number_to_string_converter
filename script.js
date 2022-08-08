let inputNum = "20";

// decimals, maximum,

const singles = [
  "",
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

  function findHundred(inputNum) {

    if (inputNum[1] == 1) {
      return (
        singles[Number(inputNum[0])] + hundreds[0] + teens[Number(inputNum[2])]
      );
    }
    // if 0 in middle
    else if (inputNum[1] == 0) {
      return (
        singles[Number(inputNum[0])] +
        hundreds[0] +
        singles[Number(inputNum[2])]
      );
    }
    // if 0 at end
    else if (inputNum[2] == 0) {
      return (
        singles[Number(inputNum[0])] +
        hundreds[0] +
        doubles[Number(inputNum[1])]
      );
    } else {
      return (
        singles[Number(inputNum[0])] +
        hundreds[0] +
        doubles[Number(inputNum[1])] +
        " " +
        singles[Number(inputNum[2])]
      );
    }
  }

  function findDoubles(inputNum){
    // check for numbers between 10 and 19
    if (inputNum.length == 2 && Number(inputNum) < 20) {
      return teens[Number(inputNum[1])];
    }
    // check for numbers between 20 and 99
    else if (inputNum.length == 2 && Number(inputNum) > 19) {
      return doubles[Number(inputNum[0])] + " " + singles[Number(inputNum[1])];
    }
  }

// check for single digits
function stringtoNum(inputNum){
if (inputNum.length == 1) {
  return (singles[Number(inputNum)]);
}
else if (inputNum.length == 2){
return findDoubles(inputNum);
}
// check for numbers between 100 and 999
else if (inputNum.length == 3) {
   return findHundred(inputNum);
  // check for 100 teen numbe
} 
 // check thousands place
else if (inputNum.length == 4) {
  let hundreths =  singles[Number(inputNum[1])] 
          hundreds[0] 
  let tens = ""

      if (inputNum[1] == 0) {
        hundreths = "";
      }
      if (inputNum[2] == 0) {
        hundreths = "";

      }else{
      console.log(
        singles[Number(inputNum[0])] +
          " thousand " + hundreths +
         
          doubles[Number(inputNum[2])] +
          teens[Number(inputNum[1])]
      )}
}
}

  // 1000
  // 1011
  // 1001
  // 1100
  // 1110
  // 1111

 val = stringtoNum(inputNum)
 console.log(stringtoNum(inputNum));