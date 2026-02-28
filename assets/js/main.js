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

      if (!form.checkValidity()) {
        // Let browser handle invalid fields
        return;
      }

      e.preventDefault();

      // Show confirmation message
      message.textContent = "Thank you! Your booking request has been received. We will contact you shortly.";
      message.classList.add('success');

      // Reset the form after a short delay so message is visible
      setTimeout(() => {
        form.reset();
      }, 500);

      // Optional: fade-out after 3 seconds
      setTimeout(() => {
        message.classList.add('fade');
      }, 3000);

      // Remove fade and text after 3.5 seconds so next submission is clean
      setTimeout(() => {
        message.textContent = "";
        message.classList.remove('success', 'fade');
      }, 3500);

    });
  }

});
