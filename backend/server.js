const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
const colors = require("colors");
const connetDB = require("./config/db");
const PORT = process.env.PORT || 8000;

// Connecting to the MongoDB database
connetDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});

// Routes

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
