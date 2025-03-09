// JS code for the above approach

// Function to display longest names
// contained in the array
function solve(arr, N) {
  // Edge Case
  if (N == 0) return [];

  // Initialize Max
  let Max = arr[0].length;

  // Create an array res
  res = [];

  // Insert first element in res
  res.push(arr[0]);

  // Traverse the array
  for (let i = 1; i < N; i++) {
    // If string with greater length
    // is found
    if (arr[i].length > Max) {
      Max = arr[i].length;
      res = [];
      res.push(arr[i]);
    }

    // If string with current max length
    else if (arr[i].length == Max) {
      res.push(arr[i]);
    }
  }

  // Return the final answer
  return res;
}

// Driver Code
let arr = ["GeeksforGeeks", "FreeCodeCamp", "StackOverFlow", "MyCodeSchool"];

let N = arr.length;

// Function call
let v = solve(arr, N);

// Printing the answer
console.log(v);

// This code is contributed by akashish__
