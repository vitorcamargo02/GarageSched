const db = require('../db');

const criarCliente = async (req, res) => {
  const { nome, email, telefone } = req.body;
  try {
    const resultado = await db.query(
      'INSERT INTO clientes (nome, email, telefone) VALUES ($1, $2, $3) RETURNING *',
      [nome, email, telefone]
    );
    res.json({ message: 'Cliente criado com sucesso!', cliente: resultado.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao criar cliente' });
  }
};


module.exports = criarCliente;