interface FormData {
    name: string;
    email: string;
    phone: string;
    checkInDate: string;
    checkOutDate: string;
    numberOfAdults: number;
    numberOfChildren: number;
    roomType: string;
    specialRequests: string;
}

class HotelManagementForm {
    private nameInput: HTMLInputElement;
    private emailInput: HTMLInputElement;
    private phoneInput: HTMLInputElement;
    private checkInDateInput: HTMLInputElement;
    private checkOutDateInput: HTMLInputElement;
    private numberOfAdultsInput: HTMLInputElement;
    private numberOfChildrenInput: HTMLInputElement;
    private roomTypeSelect: HTMLSelectElement;
    private specialRequestsTextarea: HTMLTextAreaElement;
    private formOutput: HTMLElement;

    constructor() {
        this.nameInput = document.getElementById("name") as HTMLInputElement;
        this.emailInput = document.getElementById("email") as HTMLInputElement;
        this.phoneInput = document.getElementById("phone") as HTMLInputElement;
        this.checkInDateInput = document.getElementById("checkInDate") as HTMLInputElement;
        this.checkOutDateInput = document.getElementById("checkOutDate") as HTMLInputElement;
        this.numberOfAdultsInput = document.getElementById("numberOfAdults") as HTMLInputElement;
        this.numberOfChildrenInput = document.getElementById("numberOfChildren") as HTMLInputElement;
        this.roomTypeSelect = document.getElementById("roomType") as HTMLSelectElement;
        this.specialRequestsTextarea = document.getElementById("specialRequests") as HTMLTextAreaElement;
        this.formOutput = document.getElementById("formOutput");
    }
    private getFormData(): any {
        // Parse the number of adults and children properly
        const numberOfAdults = parseInt(this.numberOfAdultsInput.value);
        const numberOfChildren = parseInt(this.numberOfChildrenInput.value);
    
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
        } as any; // Type assertion
    }

    private displayFormData(formData: FormData): void {
        if (this.formOutput) {
            this.formOutput.innerHTML = `
                <h2>Form Data:</h2>
                <p><strong>Name:</strong> ${formData.name}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Phone:</strong> ${formData.phone}</p>
                <p><strong>Check-in Date:</strong> ${formData.checkInDate}</p>
                <p><strong>Check-out Date:</strong> ${formData.checkOutDate}</p>
                <p><strong>Number of Adults:</strong> ${formData.numberOfAdults}</p>
                <p><strong>Number of Children:</strong> ${formData.numberOfChildren}</p>
                <p><strong>Room Type:</strong> ${formData.roomType}</p>
                <p><strong>Special Requests:</strong> ${formData.specialRequests}</p>
            `;
        }
    }

    public submitForm(event: Event): void {
        event.preventDefault();
        const formData = this.getFormData();
        this.displayFormData(formData);
    }
}

// Initialize the form
const form = new HotelManagementForm();

// Event listener for form submission
const hotelForm = document.getElementById("hotelForm");
if (hotelForm) {
    hotelForm.addEventListener("submit", function(event) {
        form.submitForm(event);
    });
}
