// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello from Red Hat Node.js! Agora com o deploy atualizado, mas com nome do projeto diferente');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
