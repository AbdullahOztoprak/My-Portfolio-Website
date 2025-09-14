
// Smooth scroll for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact form validation and AJAX submit
document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  const resultDiv = document.getElementById('formResult');

  // Simple validation
  if (!name || !email || !message) {
    resultDiv.textContent = 'Please fill in all fields.';
    resultDiv.style.color = 'red';
    return;
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    resultDiv.textContent = 'Please enter a valid email address.';
    resultDiv.style.color = 'red';
    return;
  }

  // Show loading
  resultDiv.textContent = 'Sending...';
  resultDiv.style.color = '#222';

  try {
    const res = await fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message })
    });
    const result = await res.text();
    resultDiv.textContent = result;
    resultDiv.style.color = 'green';
    form.reset();
  } catch (err) {
    resultDiv.textContent = 'Something went wrong. Please try again later.';
    resultDiv.style.color = 'red';
  }
});
