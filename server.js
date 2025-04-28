// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello from Red Hat Node.js!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
