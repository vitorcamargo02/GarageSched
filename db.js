const { Pool } = require('pg');

const db = new Pool({
  user: 'garagesched',
  host: 'localhost',
  database: 'oficina',
  password: 'Vitinho12345',
  port: 5432,
});

module.exports = db;