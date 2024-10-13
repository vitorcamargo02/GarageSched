const db = require('../DB');

const criarOrdemServico = async (req, res) => {
  const ordemServico = req.body;
  try {
    const resultado = await db.query('INSERT INTO ordens_servico SET ?', ordemServico);
    res.json({ message: 'Ordem de serviço criada com sucesso!' });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao criar ordem de serviço' });
  }
};

module.exports = criarOrdemServico;