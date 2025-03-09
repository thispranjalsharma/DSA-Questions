// JavaScript Recursive approach to check if an
// Array is sorted or not

// Function that returns true if array is
// sorted in non-decreasing order.
function arraySortedOrNot(a, n) {
  // Base case
  if (n == 1 || n == 0) {
    return true;
  }

  // Check if present index and index
  // previous to it are in correct order
  // and rest of the array is also sorted
  // if true then return true else return
  // false
  return a[n - 1] >= a[n - 2] && arraySortedOrNot(a, n - 1);
}

// Driver code
let arr = [20, 23, 23, 45, 78, 88];
let n = arr.length;

// Function Call
if (arraySortedOrNot(arr, n)) {
  document.write("Yes" + "<br>");
} else {
  document.write("No" + "<br>");
}


