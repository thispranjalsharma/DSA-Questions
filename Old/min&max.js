// mini element in array by loop method

const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let min = arr[0];
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) min = arr[i];
}
for (let j = 0; j < arr.length; j++) {
  if (arr[j] > max) max = arr[j];
}
// mini element in array by spread operator

console.log(min);
console.log(max);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const min = Math.min(...arr);
// console.log(min);

// // maxi element in array
// const max = Math.max(...arr);
// console.log(max);
