<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <title>Hotel Room Registration</title>
</head>
<body>
  <div class="container"><br><br><br>
    <h2 class="text-center mb-4">Hotel Room Registration</h2>
    <form id="roomForm" onsubmit="submitForm(event)" action="submit.php" method="post">
      <div class="form-group">
        <label for="roomType">Room Type:</label>
        <select class="form-control" id="roomType" name="roomType" required>
          <option value="single">Single</option>
          <option value="double">Double</option>
          <option value="suite">Suite</option>
        </select>
      </div>

      <div class="form-group">
        <label for="roomNumber">Room Number:</label>
        <input type="text" class="form-control" id="roomNumber" name="roomNumber" required>
        <small class="text-muted">Format: ABC123</small>
      </div>

      <div class="form-group">
        <label for="capacity">Capacity:</label>
        <input type="number" class="form-control" id="capacity" name="capacity" min="1" max="6" required>
        <small class="text-muted">Maximum capacity is 6 persons.</small>
      </div>

      <div class="form-group">
        <label for="price">Price per Night:</label>
        <input type="number" class="form-control" id="price" name="price" min="50" required>
        <small class="text-muted">Minimum price is ₹1000.</small>
      </div>

      <div class="form-group">
        <label for="status">Status:</label>
        <select class="form-control" id="status" name="status" required>
          <option value="available">Available</option>
          <option value="booked">Booked</option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary">Add Room</button>
    </form>

    <div id="output" class="mt-3"></div>
  </div>

  <script>
    function submitForm(event) {
      event.preventDefault();
      resetBorders();
      if (validateRoomType() && validateRoomNumber() && validateCapacity() && validatePrice()) {
        const outputElement = document.getElementById('output');
        outputElement.innerText = 'Room Added successfully!';
        outputElement.style.display = 'block';

        setTimeout(function () {
          document.getElementById('roomForm').submit(); // Submit the form
        }, 2000); // 2 seconds delay
      }
    }

    function validateRoomType() {
      const roomType = document.getElementById('roomType');
      return validateField(roomType);
    }

    function validateRoomNumber() {
      const roomNumber = document.getElementById('roomNumber');
      const regex = /^[A-Za-z0-9]{3,}$/; // At least 3 alphanumeric characters
      return validateField(roomNumber, regex);
    }

    function validateCapacity() {
      const capacity = document.getElementById('capacity');
      return validateField(capacity) && capacity.value >= 1 && capacity.value <= 6;
    }

    function validatePrice() {
      const price = document.getElementById('price');
      return validateField(price) && price.value >= 50;
    }

    function validateField(field, regex = null) {
      const value = field.value.trim();
      if (regex && !regex.test(value)) {
        field.classList.add('error');
        showValidationError(field);
        return false;
      } else {
        field.classList.remove('error');
        return true;
      }
    }

    function resetBorders() {
      const formElements = document.querySelectorAll('.form-control');
      formElements.forEach(element => {
        element.classList.remove('error');
      });
      // Remove previous validation errors if any
      const errorMessages = document.querySelectorAll('.alert-danger');
      errorMessages.forEach(message => message.remove());
    }

    function showValidationError(field) {
      const errorMessage = document.createElement('div');
      errorMessage.classList.add('alert', 'alert-danger');
      errorMessage.innerText = 'Invalid input. Please check the format.';
      field.parentElement.appendChild(errorMessage);
    }
  </script>
</body>
</html>