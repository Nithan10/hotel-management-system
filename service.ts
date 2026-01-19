console.log("Service page loaded");
const roomServiceDetails = {
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
document.addEventListener("DOMContentLoaded", () => {
  const roomServiceHeading = document.getElementById("room-service-heading");
  if (roomServiceHeading) {
    roomServiceHeading.textContent = "Room Service";

    const roomServiceDescription = document.createElement("p");
    roomServiceDescription.textContent = roomServiceDetails.description;
    roomServiceHeading.parentNode?.appendChild(roomServiceDescription);

    const roomServiceMenu = document.createElement("ul");
    roomServiceDetails.menu.forEach(item => {
      const menuItem = document.createElement("li");
      menuItem.textContent = `${item.name}: ${item.price}`;
      roomServiceMenu.appendChild(menuItem);
    });
    roomServiceHeading.parentNode?.appendChild(roomServiceMenu);

    const roomServiceHours = document.createElement("p");
    roomServiceHours.textContent = `Service Hours: ${roomServiceDetails.hours}`;
    roomServiceHeading.parentNode?.appendChild(roomServiceHours);
  }
});
