// Get reference to the screen
const screen = document.getElementById('screen');

// Function to append numbers to the screen
function appendNumber(number) {
  screen.value += number;
}

// Function to append operators (+, -, *, /)
function appendOperator(operator) {
  screen.value += operator;
}

// Function to clear the screen
function clearScreen() {
  screen.value = '';
}

// Function to calculate the result
function calculateResult() {
  try {
    // Use the JavaScript eval function to evaluate the expression
    screen.value = eval(screen.value);
  } catch (error) {
    // If an invalid expression, clear the screen and show error
    screen.value = 'Error';
    setTimeout(clearScreen, 1500); // Clear error after 1.5 seconds
  }
}
