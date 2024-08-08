function validateContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const phone = document.getElementById('phone').value;

    if (name.length < 2) {
        alert('Name must be at least 2 characters long.');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (message.length < 10) {
        alert('Message must be at least 10 characters long.');
        return false;
    }

    if (phone && !/^\d{10}$/.test(phone)) {
        alert('Phone number must be 10 digits.');
        return false;
    }

    return true;
}

function validateFeedbackForm() {
    const feedback = document.getElementById('feedback').value;

    if (feedback.length < 5) {
        alert('Feedback must be at least 5 characters long.');
        return false;
    }

    return true;
}
