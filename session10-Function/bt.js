//bai 1
// function findMin(num1, num2, num3) {
//     let min = num1;
//     if (num2 < min) {
//       min = num2; 
//     }
//     if (num3 < min) {
//       min = num3;
//     }
    
//     return min;
//   }
  
//   let num1 = +prompt("Enter first number: ");
//   let num2 = +prompt("Enter second number: "); 
//   let num3 = +prompt("Enter third number: ");
  
//   let min = findMin(num1, num2, num3);
//   console.log("The minimum number is: " + min);

//bai 2
// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i == 0) return false;
//     }
//     return true;
//   }
  
//   let num = prompt("Enter a number: ");
//   if (isPrime(num)) {
//     console.log(num + " is a prime number");
//   } else {
//     console.log(num + " is not a prime number"); 
//   }

//bai 3
// function factorial(n) {
//     if (n == 0 || n == 1) 
//       return 1;
//     else
//       return n * factorial(n - 1);
//   }
  
//   let num = +prompt("Enter a positive integer: ");
//   let result = factorial(num);
//   console.log("The factorial of " + num + " is " + result);

//bai 4
// let arr = [1,2,3,4,5,6,7,8,9,10];

// function findPairs(arr) {
//   let pairs = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] == 10) {
//         pairs.push([arr[i], arr[j]]);
//       }
//     }
//   }
//   return pairs;
// }

// let pairs = findPairs(arr);
// console.log(pairs);

//bai 5
function countChars(str) {
    let counts = {};
    for (let char of str) {
      if (counts[char]) {
        counts[char]++;
      } else {
        counts[char] = 1;
      }
    }
    
    return counts;
  }
  
  let str = prompt("Enter a string: ");
  let counts = countChars(str);
  
  for (let char in counts) {
    console.log("The key " +char + " appear: " + counts[char] + " times") ;
  }