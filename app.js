const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Conexão com o banco de dados
const { Pool } = require('pg');
const pool = new Pool({
  user: 'garagesched',
  host: 'localhost',
  database: 'oficina',
  password: 'Vitinho12345',
  port: 5432,
});

// Adicione as rotas aqui
app.get('/clientes', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM clientes');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar clientes' });
  }
});

app.post('/clientes', async (req, res) => {
  const cliente = req.body;
  try {
    const result = await pool.query('INSERT INTO clientes SET ?', cliente);
    res.json({ message: 'Cliente criado com sucesso!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar cliente' });
  }
});

app.get('/ordens-servico', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM ordens_servico');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar ordens de serviço' });
  }
});

app.post('/ordens-servico', async (req, res) => {
  const ordemServico = req.body;
  try {
    const result = await pool.query('INSERT INTO ordens_servico SET ?', ordemServico);
    res.json({ message: 'Ordem de serviço criada com sucesso!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar ordem de serviço' });
  }
});

const criarOrdemServico = require('./controllers/criarOrdemServico');
const criarCliente = require('./controllers/criarCliente');

app.post('/ordens-servico', criarOrdemServico);
app.post('/clientes', criarCliente);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});