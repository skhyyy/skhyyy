function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('show');
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    document.getElementById('error-message-name').textContent = "";
    document.getElementById('error-message-email').textContent = "";
    document.getElementById('error-message-contact').textContent = "";
    document.getElementById('error-message-subject').textContent = "";
    document.getElementById('error-message-message').textContent = "";

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contactNumber = document.getElementById('contactNumber').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    if (name === "") 
    {
        document.getElementById('error-message-name').textContent = "Name is required.";
    } 
    else if (email === "") 
    {
        document.getElementById('error-message-email').textContent = "Email is required.";
    } 
    else if (contactNumber === "" || contactNumber.length < 10) 
    {
        document.getElementById('error-message-contact').textContent = "Enter a valid number (at least 10 digits).";
    } 
    else if (subject === "") 
    {
        document.getElementById('error-message-subject').textContent = "Subject is required.";
    } 
    else if (message === "") 
    {
        document.getElementById('error-message-message').textContent = "Message is required.";
    } 
    else 
    {
        alert("Success! Your message has been sent.");
    }
});
