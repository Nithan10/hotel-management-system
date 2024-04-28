var HotelManagementForm = /** @class */ (function () {
    function HotelManagementForm() {
        this.nameInput = document.getElementById("name");
        this.emailInput = document.getElementById("email");
        this.phoneInput = document.getElementById("phone");
        this.checkInDateInput = document.getElementById("checkInDate");
        this.checkOutDateInput = document.getElementById("checkOutDate");
        this.numberOfAdultsInput = document.getElementById("numberOfAdults");
        this.numberOfChildrenInput = document.getElementById("numberOfChildren");
        this.roomTypeSelect = document.getElementById("roomType");
        this.specialRequestsTextarea = document.getElementById("specialRequests");
        this.formOutput = document.getElementById("formOutput");
    }
    HotelManagementForm.prototype.getFormData = function () {
        var numberOfAdults = parseInt(this.numberOfAdultsInput.value);
        var numberOfChildren = parseInt(this.numberOfChildrenInput.value);
        return {
            name: this.nameInput.value,
            email: this.emailInput.value,
            phone: this.phoneInput.value,
            checkInDate: this.checkInDateInput.value,
            checkOutDate: this.checkOutDateInput.value,
            numberOfAdults: isNaN(numberOfAdults) ? 0 : numberOfAdults,
            numberOfChildren: isNaN(numberOfChildren) ? 0 : numberOfChildren,
            roomType: this.roomTypeSelect.value,
            specialRequests: this.specialRequestsTextarea.value
        }; 
    };
    HotelManagementForm.prototype.displayFormData = function (formData) {
        if (this.formOutput) {
            this.formOutput.innerHTML = "\n<h2>Form Data:</h2>\n<p><strong>Name:</strong> ".concat(formData.name,"</p>\n<p><strong>Email:</strong>").concat(formData.email,"</p>\n<p><strong>Phone:</strong>").concat(formData.phone,"</p>\n<p><strong>Check-in Date:</strong>").concat(formData.checkInDate,"</p>\n<p><strong>Check-out Date:</strong>").concat(formData.checkOutDate,"</p>\n<p><strong>Number of Adults:</strong>").concat(formData.numberOfAdults,"</p>\n<p><strong>Number of Children:</strong>").concat(formData.numberOfChildren,"</p>\n<p><strong>Room Type:</strong> ").concat(formData.roomType,"</p>\n<p><strong>Special Requests:</strong> ").concat(formData.specialRequests,"</p>\n");
        }
    };
    HotelManagementForm.prototype.submitForm = function (event) {
        event.preventDefault();
        var formData = this.getFormData();
        this.displayFormData(formData);
    };
    return HotelManagementForm;
}());
var form = new HotelManagementForm();
var hotelForm = document.getElementById("hotelForm");
if (hotelForm) {
    hotelForm.addEventListener("submit", function (event) {
        form.submitForm(event);
    });
}
