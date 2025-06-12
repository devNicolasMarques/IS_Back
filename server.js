// arquivo: server.js
const express = require('express');
const { pool } = require('./mysql');
const { MongoClient } = require('mongodb');

// const mongoUri = 'mongodb+srv://usuario:senha@cluster0.mongodb.net/nome_do_banco?retryWrites=true&w=majority';
// const mongoClient = new MongoClient(mongoUri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const app = express();
const port = process.env.PORT || 3000;

app.get('/mysql/pessoas', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT id, nome, idade FROM pessoas');
    res.json(rows);
  } catch (err) {
    console.error('Erro ao buscar pessoas no MySQL:', err);
    res.status(500).json({ error: 'Erro interno ao buscar pessoas no MySQL' });
  }
});

// app.get('/mongo/pessoas', async (req, res) => {
//   try {
//     await mongoClient.connect();
//     const db = mongoClient.db('nome_do_banco');
//     const pessoas = await db.collection('pessoas').find().toArray();
//     res.json(pessoas);
//   } catch (err) {
//     console.error('Erro ao buscar pessoas no MongoDB:', err);
//     res.status(500).json({ error: 'Erro interno ao buscar pessoas no MongoDB' });
//   } finally {
//     await mongoClient.close();
//   }
// });

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
