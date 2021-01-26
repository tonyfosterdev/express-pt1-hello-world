const express = require('express');

const app = express();

app.get('/', (_req, res) => {
  res.send('Hello, World!');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});