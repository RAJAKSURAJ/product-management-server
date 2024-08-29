const express = require("express");
const router = express.Router();
const db = require("../db"); // Database connection

// Create a new product
router.post("/", (req, res) => {
  const { name, catNo, casNo, molF, molWt } = req.body;
  const query = `INSERT INTO products (name, catNo, casNo, molF, molWt) VALUES (?, ?, ?, ?, ?)`;
  db.query(query, [name, catNo, casNo, molF, molWt], (err, result) => {
    if (err) throw err;
    res.send("Product added");
  });
});

// Read all products
router.get("/", (req, res) => {
  const query = `SELECT * FROM products`;
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Update a product
router.put("/:id", (req, res) => {
  const { name, catNo, casNo, molF, molWt } = req.body;
  const query = `UPDATE products SET name=?, catNo=?, casNo=?, molF=?, molWt=? WHERE id=?`;
  db.query(
    query,
    [name, catNo, casNo, molF, molWt, req.params.id],
    (err, result) => {
      if (err) throw err;
      res.send("Product updated");
    }
  );
});

// Delete a product
router.delete("/:id", (req, res) => {
  const query = `DELETE FROM products WHERE id=?`;
  db.query(query, [req.params.id], (err, result) => {
    if (err) throw err;
    res.send("Product deleted");
  });
});

module.exports = router;
