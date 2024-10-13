const db = require('../DB');

const criarCliente = async (req, res) => {
  const cliente = req.body;
  try {
    const resultado = await db.query('INSERT INTO clientes SET ?', cliente);
    res.json({ message: 'Cliente criado com sucesso!' });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao criar cliente' });
  }
};

module.exports = criarCliente;





