// Instant validation for contact form fields
const contactFormEl = document.getElementById('contactForm');
if (contactFormEl) {
  const nameInput = contactFormEl.name;
  const emailInput = contactFormEl.email;
  const messageInput = contactFormEl.message;
  const resultDiv = document.getElementById('formResult');

  nameInput.addEventListener('input', () => {
    if (nameInput.value.trim()) {
      nameInput.style.borderColor = '';
      resultDiv.textContent = '';
    }
  });
  emailInput.addEventListener('input', () => {
    if (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailInput.value.trim())) {
      emailInput.style.borderColor = '';
      resultDiv.textContent = '';
    }
  });
  messageInput.addEventListener('input', () => {
    if (messageInput.value.trim()) {
      messageInput.style.borderColor = '';
      resultDiv.textContent = '';
    }
  });
}
// Autofocus the name field on page load
window.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.querySelector('#contactForm input[name="name"]');
  if (nameInput) nameInput.focus();
});



// Smooth scroll for navigation links & active nav highlight
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Highlight nav link on scroll
const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('nav a[href^="#"]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Animated scroll progress bar
let progressBar = document.createElement('div');
progressBar.id = 'scroll-progress';
progressBar.style.position = 'fixed';
progressBar.style.top = '0';
progressBar.style.left = '0';
progressBar.style.height = '4px';
progressBar.style.background = 'linear-gradient(90deg, #00c3ff, #ffff1c)';
progressBar.style.zIndex = '9999';
progressBar.style.transition = 'width 0.2s';
document.body.appendChild(progressBar);
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / docHeight) * 100;
  progressBar.style.width = scrolled + '%';
});

// Accessibility: focus style for nav
navLinks.forEach(link => {
  link.addEventListener('focus', () => link.classList.add('focus'));
  link.addEventListener('blur', () => link.classList.remove('focus'));
});


// Contact form validation and AJAX submit with better UX
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const resultDiv = document.getElementById('formResult');

    // Remove previous error styles
    form.name.style.borderColor = '';
    form.email.style.borderColor = '';
    form.message.style.borderColor = '';


    // Validation
    let hasError = false;
    if (!name) {
      form.name.style.borderColor = 'red';
      hasError = true;
    }
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      form.email.style.borderColor = 'red';
      hasError = true;
    }
    if (!message) {
      form.message.style.borderColor = 'red';
      hasError = true;
    }
    if (hasError) {
      resultDiv.textContent = 'Please fill in all fields correctly.';
      resultDiv.style.color = 'red';
      setTimeout(() => { resultDiv.textContent = ''; }, 3000);
      return;
    }

    // Disable submit button during submission
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    // Show loading spinner
    resultDiv.innerHTML = '<span style="color:#222">Sending <span class="loader"></span></span>';

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
  setTimeout(() => { resultDiv.textContent = ''; }, 3000);
  if (submitBtn) submitBtn.disabled = false;
    } catch (err) {
  resultDiv.textContent = 'Something went wrong. Please try again later.';
  resultDiv.style.color = 'red';
  setTimeout(() => { resultDiv.textContent = ''; }, 3000);
  if (submitBtn) submitBtn.disabled = false;
    }
  });
}

// Loader animation for form feedback
const style = document.createElement('style');
style.innerHTML = `
.loader {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid #ccc;
  border-top: 2px solid #00c3ff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
  vertical-align: middle;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;
document.head.appendChild(style);
