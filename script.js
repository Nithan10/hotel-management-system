function submitForm() {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const aadhaar = document.getElementById('aadhaar').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const roomType = document.getElementById('roomType').value;

    // Display confirmation message
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.innerHTML = `
        <p><strong>Booking Confirmed!</strong></p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Aadhaar:</strong> ${aadhaar}</p>
        <p><strong>Check-in Date:</strong> ${checkin}</p>
        <p><strong>Check-out Date:</strong> ${checkout}</p>
        <p><strong>Room Type:</strong> ${roomType}</p>
    `;
}