const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Default username for XAMPP
  password: "", // No password by default
  database: "productdb", // Your database name
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
    return;
  }
  console.log("Connected to the database");
});

module.exports = db;
