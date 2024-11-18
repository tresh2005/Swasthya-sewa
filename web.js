// JavaScript to handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here, you could add code to send this data to a backend server or store it locally
    alert(`Thank you, ${name}! We have received your message.`);

    // Clear the form
    document.getElementById('contactForm').reset();
});
