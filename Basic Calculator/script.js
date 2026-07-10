// Grab the display element from our HTML file
const display = document.getElementById('display');

// Appends character keys (numbers/operators) into the display string
function appendValue(value) {
    // If screen currently shows 0 and a new number is pressed, overwrite it
    if (display.value === '0' && !isNaN(value)) {
        display.value = value;
    } else {
        display.value += value;
    }
}

// Clears the display screen down to empty
function clearDisplay() {
    display.value = '';
}

// Drops the last entered character (Backspace/DEL function)
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Computes current display expression securely using JavaScript Math parsing
function calculateResult() {
    try {
        // Evaluate expression if text inside exists
        if (display.value !== '') {
            // eval parses text mathematically (e.g. "7*2+3" becomes 17)
            let result = eval(display.value);
            
            // Handle if user tries dividing by 0
            if (result === Infinity || result === -Infinity) {
                display.value = "Error";
            } else {
                display.value = result;
            }
        }
    } catch (error) {
        // If typing rules are broken (e.g. entering "7++-"), flag an Error
        display.value = 'Error';
    }
}