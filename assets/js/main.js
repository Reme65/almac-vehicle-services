document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('.booking-form');
  const message = document.getElementById('form-message');

  if (form && message) {
    form.addEventListener('submit', function(e) {

      if (!form.checkValidity()) {
        return;
      }

      e.preventDefault();

      // Show confirmation
      message.textContent = "Thank you! Your booking request has been received. We will contact you shortly.";
      message.classList.add('success');

      // Reset the form AFTER a short delay (1 second)
      setTimeout(() => {
        form.reset();
      }, 500); // 0.5s delay
    });
  }

});
