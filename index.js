const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Import routes
const productRoutes = require("./routes/products");
app.use("/api/products", productRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
