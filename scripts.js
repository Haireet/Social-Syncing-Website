function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been submitted successfully.`);
    } else {
        alert('Please fill in all fields before submitting the form.');
    }
}