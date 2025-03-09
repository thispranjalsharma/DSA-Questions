// A JavaScript program to find a peak element

// Find the peak element in the array
function findPeak(arr, n) {
  // first or last element is peak element
  if (n == 1) return 0;
  if (arr[0] >= arr[1]) return 0;
  if (arr[n - 1] >= arr[n - 2]) return n - 1;

  // check for every other element
  for (var i = 1; i < n - 1; i++) {
    // check if the neighbors are smaller
    if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) return i;
  }
}

// Driver Code
var arr = [1, 3, 20, 4, 1, 0];
var n = arr.length;
// console.log("Index of a peak point is " + findPeak(arr, n));

// This code is contributed by pranjal sharma.

// JavaScript implementation of the approach

// Function that returns true if the word is found
function isWordPresent(sentence, word) {
  // To break the sentence in words
  let s = sentence.split(" ");

  // To temporarily store each individual word
  for (let temp = 0; temp < s.length; temp++) {
    // Comparing the current word
    // with the word to be searched
    if (s[temp] == word) {
      return true;
    }
  }
  return false;
}

// Driver code
let s = "Geeks for Geeks";
let word = "Geeks";

if (isWordPresent(s, word)) console.log("Yes");
else console.log("No");

// This code is contributed by pranjal sharma
