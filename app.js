const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000

app.get('/test', (req, res) => {
  res.send('Hello World, in production !!');
});

app.get('/demo', (req, res) => {
  res.send('Hello there, in Demo');
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
