// assets/js/main.js
document.addEventListener('DOMContentLoaded', () => {

  // ------------------------
  // Hamburger menu toggle
  // ------------------------
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }

  // ------------------------
  // Booking form confirmation
  // ------------------------
  const form = document.querySelector('.booking-form');
  const message = document.getElementById('form-message');

  if (form && message) {
    form.addEventListener('submit', function(e) {

      // If the form is invalid, let browser handle it
      if (!form.checkValidity()) {
        return;
      }

      // Prevent default submission so page doesn't reload
      e.preventDefault();

      // Show confirmation message
      message.textContent = "Thank you! Your booking request has been received. We will contact you shortly.";
      message.classList.add('success');

      // Reset the form
      form.reset();
    });
  }

});