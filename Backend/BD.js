// backend/db.js
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",     // o IP de tu servidor
  user: "root",          // usuario de MySQL
  password: "123456",    // contraseña de MySQL
  database: "asesoria"   // nombre de tu base
});

db.connect((err) => {
  if (err) {
    console.error("❌ Error al conectar a MySQL:", err);
    return;
  }
  console.log("✅ Conexión a MySQL establecida");
});

module.exports = db;
