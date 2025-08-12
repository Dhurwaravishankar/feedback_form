const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

const successMsg = document.getElementById('successMessage');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function toggleErrorMessage(element, message) {
  if (message) {
    element.textContent = message;
    element.classList.add('show');
  } else {
    element.textContent = '';
    element.classList.remove('show');
  }
}

function validate() {
  let isValid = true;

  // Validate Name
  if (nameInput.value.trim() === '') {
    toggleErrorMessage(nameError, 'Please enter your name.');
    isValid = false;
  } else {
    toggleErrorMessage(nameError, '');
  }

  // Validate Email
  const emailVal = emailInput.value.trim();
  if (emailVal === '') {
    toggleErrorMessage(emailError, 'Please enter your email.');
    isValid = false;
  } else if (!emailRegex.test(emailVal)) {
    toggleErrorMessage(emailError, 'Please enter a valid email address.');
    isValid = false;
  } else {
    toggleErrorMessage(emailError, '');
  }

  // Validate Message
  if (messageInput.value.trim() === '') {
    toggleErrorMessage(messageError, 'Please enter your message.');
    isValid = false;
  } else {
    toggleErrorMessage(messageError, '');
  }

  return isValid;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Remove success message if visible
  successMsg.classList.remove('show');

  if (validate()) {
    // Show success message with animation
    successMsg.classList.add('show');

    // Reset form
    form.reset();

    // Clear errors
    toggleErrorMessage(nameError, '');
    toggleErrorMessage(emailError, '');
    toggleErrorMessage(messageError, '');
  }
});