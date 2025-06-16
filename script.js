document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMsg = document.getElementById('formMsg');

  if (name && email && message) {
    formMsg.style.color = 'green';
    formMsg.textContent = 'Thank you! Your message has been sent.';
    this.reset();
  } else {
    formMsg.style.color = 'red';
    formMsg.textContent = 'Please fill in all fields.';
  }
})
