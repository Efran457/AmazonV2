// Load saved items from localStorage, or use empty array if none exist
const savedItems = JSON.parse(localStorage.getItem("items")) || [];

// Get the list element where items will be displayed
const itemList = document.getElementById("itemList");

// Counter to track how many items are displayed
let i = 0;

// Loop through each saved item and create a list element for it
savedItems.forEach((item, index) => {
    // Create a new list item element
    const li = document.createElement("li");

    // Style the list item as a flexbox for proper layout
    li.style.display = "flex";
    li.style.alignItems = "center";
    li.style.gap = "10px";

    // Add the item text to the list element
    const text = document.createTextNode(item);
    li.appendChild(text);

    // Create a "Buy" button for this item
    const button = document.createElement("button");
    const Rbutton = document.createElement("button");
    button.textContent = "Buy";
    Rbutton.textContent = "Remove";

    // Define what happens when the Buy button is clicked
    button.onclick = function() {
        console.log("Buying:", item);

        // Remove the item from the savedItems array
        savedItems.splice(index, 1);

        // Update localStorage to reflect the removal
        localStorage.setItem("items", JSON.stringify(savedItems));

        // Get the list of already purchased items (or empty array if none)
        let buyedItems = JSON.parse(localStorage.getItem("buyedItems")) || [];

        // Add this item to the purchased items list
        buyedItems.push(item);
        localStorage.setItem("buyedItems", JSON.stringify(buyedItems));

        // Remove the list item from the display
        li.remove();

        // If the cart is now empty, show a "None" message
        if (savedItems.length === 0) {
            const emptyLi = document.createElement("li");
            emptyLi.textContent = "None";
            emptyLi.style.color = "#f05226";
            itemList.appendChild(emptyLi);
        }
    };
    Rbutton.onclick = function() {
        // Remove the item from the savedItems array
        savedItems.splice(index, 1);

        // Update localStorage to reflect the removal
        localStorage.setItem("items", JSON.stringify(savedItems));

        // Remove the list item from the display
        li.remove();

        // If the cart is now empty, show a "None" message
        if (savedItems.length === 0) {
            const emptyLi = document.createElement("li");
            emptyLi.textContent = "None";
            emptyLi.style.color = "#f05226";
            itemList.appendChild(emptyLi);
        }
    }

    // Add the Buy button to the list item
    li.appendChild(button);
    li.appendChild(Rbutton);

    // Add the complete list item to the list
    itemList.appendChild(li);

    // Increment the counter
    i += 1;
});

// If no items were displayed, show a "None" message
if (i == 0) {
    const li = document.createElement("li");
    li.textContent = "None";
    li.style.color = "#f05226";
    itemList.appendChild(li);
}
// If there are items, add a "Clear Cart" button
else {
    const Button = document.createElement("button");
    Button.textContent = "Clear Cart";

    // Define what happens when Clear Cart is clicked
    Button.onclick = function() {
        // Clear all items from localStorage
        localStorage.setItem("items", JSON.stringify([]));

        // Remove all displayed items from the list
        itemList.innerHTML = "";

        // Show the "None" message
        const emptyLi = document.createElement("li");
        emptyLi.textContent = "None";
        emptyLi.style.color = "#f05226";
        itemList.appendChild(emptyLi);

        // Remove the Clear Cart button itself
        Button.remove();
    }

    // Add the Clear Cart button to the page
    document.body.appendChild(Button);
}