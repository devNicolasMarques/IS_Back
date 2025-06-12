const express = require('express');
const app = express();
const port = 3000;

const pessoas = [
  { id: 1, nome: 'Ana', idade: 28 },
  { id: 2, nome: 'Carlos', idade: 34 },
  { id: 3, nome: 'Maria', idade: 25 },
];

app.get('/pessoas', (req, res) => {
  res.json(pessoas);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
