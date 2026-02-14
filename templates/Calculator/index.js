const Display = document.getElementById("display");
let displayString = "";
const limit = 68

function AddText(text) {
    if (displayString.length >= limit) {return;}
    displayString += text;
    Display.value = displayString;

    adjustFontSize()
}

function backspace() {
    displayString = displayString.slice(0,-1);
    Display.value = displayString;
    adjustFontSize()
}

function clearAll() {
    displayString = "";
    Display.value = displayString;
    adjustFontSize()
}

function calculate() {
    try {
        if (displayString.length === 0) return; // do nothing if empty
        displayString = eval(displayString).toString(); // safely evaluate
    } catch(err) {
        displayString = "Error";
    }
    Display.value = displayString;
    adjustFontSize();
}



// Adjust font size based on length
function adjustFontSize() {
    const length = Display.value.length;

    if(length <= 11) {
        Display.style.fontSize = "2.5rem";
    } else if(length <= 22) {
        Display.style.fontSize = "2rem";
    } else if(length <= 36) {
        Display.style.fontSize = "1.2rem";
    } else{
        Display.style.fontSize = "0.7rem";
    }
}
