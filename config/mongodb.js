const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://usuario:senha@cluster0.mongodb.net/nome_do_banco?retryWrites=true&w=majority';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectMongo() {
  try {
    await client.connect();
    console.log('Conectado ao MongoDB');
    const db = client.db('nome_do_banco');
    // Exemplo: listar coleções
    const collections = await db.listCollections().toArray();
    console.log('Coleções disponíveis:', collections.map(col => col.name));
  } catch (err) {
    console.error('Erro ao conectar no MongoDB:', err);
  } finally {
    await client.close();
  }
}

module.exports = { client, connectMongo };
