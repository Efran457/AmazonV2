let Buying = false;
const Items = ["Square","Circle","Triangle","Diamond"];
let owndedItems = JSON.parse(localStorage.getItem("items")) || [];

// Get all radio buttons inside the container
const radios = document.querySelectorAll("#radios input[type='radio']");

// Get the Buy button element
const buyButton = document.querySelector("button"); // Adjust selector if needed to target the correct button

// Initially disable all radios
radios.forEach(radio => radio.disabled = true);

// Initially hide the Buy button
if (buyButton) {
    buyButton.style.display = "none";
}

function BuyCheck() {
    Buying = document.getElementById("BuyCheck").checked;

    // Enable/disable radios individually
    radios.forEach(radio => radio.disabled = !Buying);

    // Show or hide the Buy button based on Buying state
    if (buyButton) {
        buyButton.style.display = Buying ? "block" : "none";
    }
}

function BuyNow() {
    if (!Buying) {
        // Button is already hidden when Buying is false
        return;
    }

    let selectedItem = null;

    for (let radio of radios) {
        if (radio.checked) {
            selectedItem = radio.value;
            break;
        }
    }

    if (!selectedItem) {
        window.alert("Could not Buy any item!");
    } else {
        owndedItems.push(Items[selectedItem - 1]);

        for (let item of owndedItems) {
            console.log("Owned:", item);
        }
    }

    localStorage.setItem("items", JSON.stringify(owndedItems));
    localStorage.setItem("new", "true");
    console.log("Saved to localStorage:", localStorage.getItem("new"));

}


function Loop() {
    requestAnimationFrame(Loop);
}

Loop()