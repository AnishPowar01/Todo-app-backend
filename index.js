// const { config } = require("dotenv");
const express = require("express");

const app = express();

// load config

require("dotenv").config();

const PORT = process.env.PORT || 4000;

// middleware to parse data from request body

app.use(express.json());

// import routes

const todoRoutes = require("./routes/todo");

app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

const dbConnect = require("./config/db");
dbConnect();

app.get("/", (req, res) => {
  res.send(`<h1>This is Home page Baby</h1>`);
});
