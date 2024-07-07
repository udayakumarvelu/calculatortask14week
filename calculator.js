// Function to add numbers to display
function addToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Function to perform arithmetic operations
function performOperation(operator) {
    const display = document.getElementById('display');
    display.value += operator;
}

// Function to calculate result
function calculate() {
    const display = document.getElementById('display');
    const expression = display.value;

    try {
        const result = eval(expression);
        display.value = result;
    } catch (error) {
        alert('Invalid expression');
        clearDisplay();
    }
}

// Event listener for keyboard events
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Check if key is a number or one of the allowed operations
    if (!isNaN(key) || ['+', '-', '*', '/', '%'].includes(key)) {
        addToDisplay(key);
    } else {
        // Show alert for invalid key press
        alert('Only numbers and specified operations (+, -, *, /, %) are allowed.');
    }
});
