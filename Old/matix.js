// Java script code to find max element in a matrix

let N = 4;
let M = 4;

function maxInMatrix(mat) {
  let maxNumber = Number.MAX_VALUE;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (mat[i][j] < maxNumber) {
        maxNumber = mat[i][j];
      }
    }
  }

  return maxNumber;
}

let mat = [
  [1, 2, 3, 4],
  [55, 87, 8, 6],
  [25, 35, 56, 48],
  [95, 22, 10, 11],
];

console.log(maxInMatrix(mat));
