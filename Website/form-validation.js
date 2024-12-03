function validateForm() {
    let isValid = true;

    // Clear previous error messages
    document.getElementById('fnameError').textContent = '';
    document.getElementById('lnameError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('serviceError').textContent = '';
    document.getElementById('inquiryError').textContent = '';
    document.getElementById('detailsError').textContent = '';

    // First name validation
    const fname = document.getElementById('fname').value;
    if (fname.trim() === '') {
        document.getElementById('fnameError').textContent = 'First name is required.';
        isValid = false;
    }

    // Last name validation
    const lname = document.getElementById('lname').value;
    if (lname.trim() === '') {
        document.getElementById('lnameError').textContent = 'Last name is required.';
        isValid = false;
    }

    // Phone number validation
    const phone = document.getElementById('phone').value;
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number.';
        isValid = false;
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Service selection validation
    const service = document.getElementById('service').value;
    if (service === '') {
        document.getElementById('serviceError').textContent = 'Please select a service.';
        isValid = false;
    }

    // Inquiry type validation
    const inquiry = document.getElementById('inquiry').value;
    if (inquiry === '') {
        document.getElementById('inquiryError').textContent = 'Please select an inquiry type.';
        isValid = false;
    }

    // Additional details validation (optional but can check if it is too long or empty)
    const details = document.getElementById('details').value;
    if (details.trim().length > 500) {
        document.getElementById('detailsError').textContent = 'Additional details should not exceed 500 characters.';
        isValid = false;
    }

    return isValid;
}
