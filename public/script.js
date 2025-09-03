document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };
  const res = await fetch('/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  const result = await res.text();
  document.getElementById('formResult').textContent = result;
});
