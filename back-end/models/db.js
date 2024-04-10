// models/db.js
const sql = require('mssql');
require('dotenv').config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true, 
    trustServerCertificate: true, 
  },
};

const pool = new sql.ConnectionPool(config);

async function connect() {
  try { 
    await pool.connect();
    console.log('Connected to SQL Server');
  } catch (error) {
    console.error('Error connecting to SQL Server:', error);
  }
}

module.exports = {
  pool,
  connect,
};
