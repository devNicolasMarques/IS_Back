const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',      // ou IP do seu servidor
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'nome_do_banco',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

async function testConnection() {
  try {
    const [rows] = await pool.query('SELECT NOW() AS agora');
    console.log('Conectado ao MySQL em:', rows[0].agora);
  } catch (err) {
    console.error('Erro ao conectar no MySQL:', err);
  } finally {
    await pool.end();
  }
}

module.exports = { pool, testConnection };