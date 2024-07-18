const express = require("express");

const dotenv = require("dotenv");
const database = require("./src/config/database");

dotenv.config();

const app = express();

app.use(express.json());

database();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
