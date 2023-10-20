// Bài 1: 
// let arr = ['c', 's', 'c', '2', '6', '1'];

// let reversed = "";
// for (let i = arr.length - 1; i >= 0; i--) {
//   reversed += arr[i]; 
// }

// console.log(reversed); 

// Bài 2:
// function formatNumber(num) {
//     let result = "";
//     let numString = num.toString();
    
//     for (let i = 0; i < numString.length; i++) {
//       if (i > 0 && numString[i-1] % 2 === 0 && numString[i] % 2 === 0) {
//         result += "-" + numString[i];
//       } else {
//         result += numString[i];
//       }
//     }
  
//     return result;
//   }
  
//   console.log(formatNumber(245468)); 

// Bài 3:
// let numbers = [1, 5, 8, 7, 9, 6, 5, 41, 2, 6, 55, 4, 8];

// let max = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i]; 
//   }
// }

// console.log(max); 

// Bài 4:
// function invertCase(str) {
//     let result = "";
//     for (let char of str) {
//       if (char === char.toUpperCase()) {
//         result += char.toLowerCase();
//       } else {
//         result += char.toUpperCase();
//       }
//     }
//     return result;
//   }
  
//   console.log(invertCase("Keep Calm And Code On")); 

// Bài 5:

// let numbers = [1, 5, 8, 7, 9, 6, 5, 41, 2, 6, 55, 4, 8];

// numbers.sort((a, b) => a - b);

// console.log(numbers); // [1, 2, 4, 5, 5, 6, 6, 7, 8, 8, 9, 41, 55]