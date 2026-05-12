// ===== HAMBURGER MENU FUNCTIONALITY =====
// This code handles the mobile menu toggle (hamburger icon)
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// When user clicks the menu icon, toggle the navbar visibility
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Change icon from menu to X
    navbar.classList.toggle('active'); // Show/hide navbar
};

// ===== CONTACT FORM - EMAIL SENDING WITH EMAILJS =====
// This code handles the contact form submission and sends emails to your Gmail

// Wait for the page to fully load before accessing the form
document.addEventListener('DOMContentLoaded', function() {
    // Get the contact form element by its ID
    let contactForm = document.getElementById('contactForm');
    
    // Check if form exists before adding event listener
    if (contactForm) {
        // When the form is submitted, run this function
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop the page from refreshing on submit
            
            // Collect all the form data
            let fullName = document.getElementById('fullName').value; // Get user's name
            let email = document.getElementById('email').value; // Get user's email
            let phone = document.getElementById('phone').value; // Get user's phone (optional)
            let subject = document.getElementById('subject').value; // Get message subject
            let message = document.getElementById('message').value; // Get the main message
            
            // Create an object with all the form data to send via EmailJS
            let templateParams = {
                name: fullName, // Sender's name - matches template {{name}}
                email: email, // Sender's email - matches template {{email}}
                phone_number: phone, // Sender's phone - matches template {{phone_number}}
                title: subject, // Message subject - matches template {{title}}
                message: message, // Main message content - matches template {{message}}
            };
            
            // Send the email using EmailJS service
            emailjs.send(
                'service_0lgd0r4', // Your EmailJS Service ID - connects to your Gmail
                'template_i5wm629', // Your EmailJS Template - format for the email
                templateParams // The form data to send
            ).then(function(response) {
                // If email sends successfully, show success message
                alert('Message sent successfully! I will get back to you soon.');
                contactForm.reset(); // Clear the form fields
            }, function(error) {
                // If there's an error, show error message
                alert('Failed to send message. Please try again.');
                console.log('Error:', error);
            });
        });
    } else {
        console.log('Contact form not found!');
    }
});