function Square_Diff(n) {
	let sumOfSquares = 0;
	let sum = 0;

	for (let i = 1; i <= n; i++) {
		sumOfSquares += Math.pow(i, 2);
		sum += i;
	}

	let squareOfSum = Math.pow(sum, 2);
	let absDifference = Math.abs(sumOfSquares - squareOfSum);
	return absDifference;
}

const n = 10;
console.log(Square_Diff(n));
// This code is contributed by pranjal sharma

// Time Complexity: O(n)

// Auxiliary Space: O(1)

// Approach : 
// 1. Find the sum of square of first n natural numbers. 
// 2. Find the sum of first n numbers and square it. 
// 3. Find the absolute difference between both the sums and print it.
