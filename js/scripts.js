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
  let roman = "";
  let romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  for (let i = 0; i < numbers.length; i++){
     while (num >= numbers[i]) {
        roman = roman + romanNumeral[i];
        num = num - numbers[i];
      }
   }
   return roman;
}

convertToRoman(1000);
console.log(convertToRoman(100));