const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const db = require('./db');

// Removi a conexão duplicada com o banco de dados

app.get('/clientes', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM clientes');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar clientes' });
  }
});

app.post('/clientes', async (req, res) => {
  const criarCliente = require('./controllers/criarCliente');
  criarCliente(req, res);
});

app.get('/ordens-servico', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM ordens_servico');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar ordens de serviço' });
  }
});

app.post('/ordens-servico', async (req, res) => {
  const criarOrdemServico = require('./controllers/criarOrdemServico');
  criarOrdemServico(req, res);
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.post('/test', (req, res) => {
  res.json({ receivedData: req.body });
});
