// const array = [0,1,2,3,4,5];
// const namesArr = ["Bob", "Peter", "John", "Mary", "Jane"];

// let multByThreeArr = array.map(function(element) {
//   return element * 3;
// });
// multByThreeArr;

// const doubledArray = array.map(function(element) {
//   return element * 2;
// });
// doubledArray;


// const namesToCap = namesArr.map(function(element) {
//   return element.toUpperCase();
// })
// namesToCap;

// console.log(multByThreeArr);
// console.log(doubledArray);
// console.log(namesToCap);

// Roman Numerals
// M = 1000
// CM = 900
// D = 500
// CD = 400
// C = 100
// XC = 90
// L = 50
// XL = 40
// X = 10
// IX = 9
// V = 5
// IV = 4
// I = 1


function convertToRoman(num) {
   //Create an empty string
  let roman = "";
  //Create an array of possible RN up to 1000
  let romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  //Create an array of possible number values
  let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  //Iterate for a length of our numbers array
  for (let i = 0; i < numbers.length; i++){
     //While original number is larger than our unputed numbers array
     while (num >= numbers[i]) {
        //Add its equivalent roman numeral to our original empty string
        roman = roman + romanNumeral[i];
        //Substract the value from the original number to end while loop
        num = num - numbers[i];
      }
   }
   return roman;
}

convertToRoman(1000);
console.log(convertToRoman(100)); 