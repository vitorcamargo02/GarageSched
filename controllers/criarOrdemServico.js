const db = require('../db');

const criarOrdemServico = async (req, res) => {
  const { nome, descricao, valor } = req.body;
  try {
    const resultado = await db.query(
      'INSERT INTO ordens_servico (nome, descricao, valor) VALUES ($1, $2, $3) RETURNING *',
      [nome, descricao, valor]
    );
    res.json({ message: 'Ordem de serviço criada com sucesso!', ordemServico: resultado.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao criar ordem de serviço' });
  }
};

module.exports = criarOrdemServico;