const database = require('./database');

const getMecanicos = async () => {
  const result = await database.query('SELECT * FROM mecanicos');
  return result.rows;
};

const createMecanico = async (mecanico) => {
  const result = await database.query('INSERT INTO mecanicos (nome, idade, sexo, curso, foto) VALUES ($1, $2, $3, $4, $5) RETURNING *', [mecanico.nome, mecanico.idade, mecanico.sexo, mecanico.curso, mecanico.foto]);
  return result.rows[0];
};

module.exports = { getMecanicos, createMecanico };