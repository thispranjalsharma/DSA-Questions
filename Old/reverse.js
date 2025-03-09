function reverseFunction(num) {
  let digits = Array.from(String(num), Number);
  let reversedArray = digits.reduce((acc, digit) => [digit, ...acc], []);
  return parseInt(reversedArray.join(""));
}

let num = 123456789;
let reverseFunction = reverseFunction(num);

console.log(reverseFunction);

function reverseFunction(num) {
  let numStr = num.toString();
  let reversedStr = "";
  for (let i = numStr.length - 1; i >= 0; i--) {
    reversedStr += numStr[i];
  }
  return parseInt(reversedStr);
}N


let num1 = 987654321;
let reversedNum = reverseFunction(num);

console.log(reversedNum);



// findRectangleDetails function 
 
function findRectangleDetails(perimeter, length) {
  // Check for invalid input (perimeter cannot be less than twice the length)
  if (perimeter < 2 * length) {
    console.error("Invalid input: Perimeter cannot be less than twice the length");
    return;
  }

  const breadth = (perimeter - 2 * length) / 2;
  const area = length * breadth;

  console.log("Breadth of the rectangle:", breadth, "cm");
  console.log("Area of the rectangle:", area, "cm²");
}

// Example usage:
const perimeter = 230;
const length = 70;

findRectangleDetails(perimeter, length);
