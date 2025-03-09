// https://itspranjalsharma.github.io/SignatureApp/
function generateRandomPhoneNumber() {
  // Define the possible starting digits
  const possibleStartingDigits = [6, 7, 8, 9];

  // Generate a random index from the possible digits array
  const randomIndex = Math.floor(Math.random() * possibleStartingDigits.length);

  // Get the random starting digit
  const startingDigit = possibleStartingDigits[randomIndex];

  // Generate the remaining 9 digits (0-9)
  let remainingDigits = "";
  for (let i = 0; i < 9; i++) {
    remainingDigits += Math.floor(Math.random() * 10);
  }

  // Combine the starting digit with the remaining digits
  return startingDigit + remainingDigits;
}

// Generate a random phone number
const randomNumber = generateRandomPhoneNumber();

// Display the generated phone number
console.log(randomNumber);
