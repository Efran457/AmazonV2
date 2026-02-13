const links = document.querySelectorAll("a");
const isReturningCustomer = localStorage.getItem("new");

links.forEach(link => {
    link.style.position = "relative";
    const speed = (Math.random() * 1.5 + 0.5).toFixed(2) + "s";
    link.style.animation = `moveUpDown ${speed} infinite ease-in-out`;
});

console.log(isReturningCustomer);
if (isReturningCustomer !== "true") {
    document.getElementById("HelloText").textContent = "Welcome New Customer";
}