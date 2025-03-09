// An Program to see vowel in string

function isVowel(r) {
  r = r.toUpperCase();
  return r == "A" || r == "E" || r == "I" || r == "O" || r == "U";
}

function countOfVowel(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (isVowel(str[i]))
      // Check for vowel
      ++count;
  }
  return count;
}

var str = "radhika";

console.log(countOfVowel(str));
console.log("<br>");

// JavaScript program to count vowels in a string

/**
 * This program checks whether a given character is a vowel or not.
 * @param {string} ch - The character to be checked.
 * @returns {boolean} True if the character is a vowel, false otherwise.
 *
 * The function first converts the character to uppercase using the `toUpperCase` method.
 * Then it checks if the character is equal to any of the five vowels 'A', 'E', 'I', 'O', 'U'.
 * If it is, the function returns true. If it is not, the function returns false.
 *
 * This function is used in the `countOfVowel` and `countVowels` functions to count the
 * number of vowels in a string.
 */

// Returns count of vowels in str
function countVowels(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++)
    if (isVowel(str[i]))
      // Check for vowel
      ++count;
  return count;
}

// Main Calling Function

// string object
var str = "radhika";

// Total numbers of Vowel
// console.log(countVowels(str));
// console.log("<br>");

// This code is contributed by rdtank.
