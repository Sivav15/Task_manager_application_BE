const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const database = require("./src/config/database");
const authRoute = require("./src/routes/authRoute");
const taskRoute = require("./src/routes/taskRoute");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

database();

app.get("/", (req, res) =>
  res.status(200).json({
    message: "server is running successful",
  })
);

app.use("/api/auth", authRoute);
app.use("/api/tasks", taskRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
