document.addEventListener('DOMContentLoaded', () => {
  // Hamburger menu toggle (already there)
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }

  // Booking form confirmation
  const form = document.querySelector('.booking-form');
  const message = document.getElementById('form-message');

  if (form && message) {
    form.addEventListener('submit', function(e) {
      if (!form.checkValidity()) {
        return;
      }
      e.preventDefault();
      message.textContent = "Thank you! Your booking request has been received. We will contact you shortly.";
      message.classList.add('success');
      form.reset();
    });
  }
});