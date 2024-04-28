// TypeScript code
console.log("Service page loaded");
// Sample room service details (replace with actual data from your system)
var roomServiceDetails = {
    description: "Order delicious meals and other services directly to your room.",
    menu: [
        { name: "Breakfast", price: "₹2,000" },
        { name: "Lunch", price: "₹5,000" },
        { name: "Dinner", price: "₹8,000" },
        { name: "Snacks", price: "₹1,500" },
        { name: "Beverages", price: "₹999" }
    ],
    hours: "24/7"
};
// Update room service details in the HTML
document.addEventListener("DOMContentLoaded", function () {
    var _a, _b, _c;
    var roomServiceHeading = document.getElementById("room-service-heading");
    if (roomServiceHeading) {
        roomServiceHeading.textContent = "Room Service";
        var roomServiceDescription = document.createElement("p");
        roomServiceDescription.textContent = roomServiceDetails.description;
        (_a = roomServiceHeading.parentNode) === null || _a === void 0 ? void 0 : _a.appendChild(roomServiceDescription);
        var roomServiceMenu_1 = document.createElement("ul");
        roomServiceDetails.menu.forEach(function (item) {
            var menuItem = document.createElement("li");
            menuItem.textContent = "".concat(item.name, ": ").concat(item.price);
            roomServiceMenu_1.appendChild(menuItem);
        });
        (_b = roomServiceHeading.parentNode) === null || _b === void 0 ? void 0 : _b.appendChild(roomServiceMenu_1);
        var roomServiceHours = document.createElement("p");
        roomServiceHours.textContent = "Service Hours: ".concat(roomServiceDetails.hours);
        (_c = roomServiceHeading.parentNode) === null || _c === void 0 ? void 0 : _c.appendChild(roomServiceHours);
    }
});
