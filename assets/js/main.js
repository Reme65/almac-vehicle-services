// Hamburger menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Booking form confirmation popup
const bookingForm = document.querySelector('.booking-form');
bookingForm?.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name')?.value.trim();
  const email = document.getElementById('email')?.value.trim();
  const service = document.getElementById('service')?.value;
  const date = document.getElementById('date')?.value;

  if (!name || !email || !service || !date) {
    alert('Please fill in all required fields.');
    return;
  }

  alert(`Thank you ${name}! Your ${service} booking on ${date} has been received.`);
  bookingForm.reset();
});