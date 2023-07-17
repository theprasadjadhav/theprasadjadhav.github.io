const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const response = {
    success: true,
    message: 'Your message has been sent successfully!'
  };

  
  const flashMessage = document.createElement('div');
  flashMessage.className = 'flash-message';
  flashMessage.textContent = response.message;

  contactForm.parentNode.insertBefore(flashMessage, contactForm);

  setTimeout(function() {
    flashMessage.remove();
  }, 3000);

  contactForm.reset();
});
