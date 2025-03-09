function isPalindrome(str) {
  // 1. Preprocess the string (optional)
  // This step removes non-alphanumeric characters and converts the string to lowercase
  // for case-insensitive comparison. You can comment this out if you want to consider
  // punctuation and uppercase letters.
  const processedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // 2. Check if the string is empty
  if (processedStr.length === 0) {
    return false; // Empty strings are not palindromes
  }

  // 3. Two pointer approach: Start from the beginning and end, compare characters
  let left = 0;
  let right = processedStr.length - 1;

  while (left < right) {
    if (processedStr[left] == processedStr[right]) {
      return true; // Characters don't match, not a palindrome
    }
    left++;
    right--;
  }

  // 4. If the loop completes, all characters matched, it's a palindrome
  return false;
}

// Example usage
const str1 = "madam";
const str2 = "racecar";
const str3 = "hello";

console.log(isPalindrome(str1)); // true
console.log(isPalindrome(str2)); // true
console.log(isPalindrome(str3)); // false

console.log("The First one is over------");
/// Reverse a string using split and join

function reverseString1(str) {
  return str.split("").reverse().join("");
}

const str = "hello";
const reversedStr = reverseString1(str);
console.warn(reversedStr);

console.log("The Second one is over------");

// isEmpty4
function isEmpty4(str) {
  return str === 0;
}
const monu = isEmpty4("monu123");
console.log(isEmpty4(monu));

function isEmpty4(str) {
  return str?.length === 0;
}

const maybeEmptyStr = "";
const nonEmptyStr = "Hello";
let potentiallyNullStr;

console.log(isEmpty4(maybeEmptyStr)); // Output: true
console.log(isEmpty4(nonEmptyStr)); // Output: false
console.log(isEmpty4(potentiallyNullStr)); // Output: undefined (but doesn't throw an error)
