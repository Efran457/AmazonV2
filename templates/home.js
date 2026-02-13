const buyedItems = JSON.parse(localStorage.getItem("buyedItems")) || [];
let imgs = [];
let i = 0

for (i = 0; i < buyedItems.length; i++) {
    imgs[i] = document.createElement("img");
    imgs[i].src = `assets/images/${buyedItems[i]}.png`;
    imgs[i].alt = buyedItems[i];
    imgs[i].width = 100;

    // Add the image to the page!
    document.body.appendChild(imgs[i]);
}

if (i == 0){
    let Text = document.createElement("p")
    Text.textContent = "None"
    document.body.appendChild(Text);
}

console.log(i);