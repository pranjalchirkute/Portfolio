const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static('frontend/build'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

// Optional: Contact form submission
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  // Save to database logic or send an email here
  res.status(200).send('Message received');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
