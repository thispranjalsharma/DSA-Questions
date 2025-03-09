// //^  Q.1 Two Sum ?
// // Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// // You may assume that each input would have exactly one solution, and you may not use the same element twice.
// // You can return the answer in any order.
// function twoSum(nums, target) {
//   // Create a map to store the indices of numbers
//   const numIndices = new Map();

//   // Iterate through the array
//   for (let i = 0; i < nums.length; i++) {
//     // Calculate the complement needed to reach the target
//     const complement = target - nums[i];

//     // Check if the complement exists in the map
//     if (numIndices.has(complement)) {
//       // If found, return the indices of the current number and its complement
//       return [numIndices.get(complement), i];
//     }

//     // If the complement doesn't exist, store the index of the current number
//     numIndices.set(nums[i], i);
//   }

//   // If no solution is found, return an empty array
//   return [];
// }

// // Example usage:
// const nums = [2, 7, 11, 15];
// const target = 9;
// console.log(twoSum(nums, target)); // Output: [0, 1] (indices of 2 and 7)

// !  Palindrome
function isPalindrome(str) {
  let rev = str.split("").reverse().join("");

  if (rev == str) {
    return true;
  }
  return false;
}

let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";
let str4 = "Radhika"

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));

// Javascript to find factorial
// of given number

// function to find factorial
// of given number
function factorial(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}

// Driver Code
let num = 5;
document.write("Factorial of " + num + " is " + factorial(num));

// This code is contributed by Pranjal Sharma
      