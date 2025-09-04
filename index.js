const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle contact form submissions
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  // Here you can add logic to save the message, send email, etc.
  console.log('Contact form submitted:', { name, email, message });
  res.send('Thank you for your message, ' + name + '!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Portfolio site running on port ${PORT}`);
});
