require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors = require("cors");
const studentsRouter = require("./routes/students");
const profileImageRouter = require("./routes/profileImages")

// Connect to DB
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", () => { console.error("connection error:") });
db.once("open", () => {
  console.log("Connected to DB");
});

// Middlewares
app.use(cors({ origin: 'http://localhost:5000' }));
app.use('/uploads/profileImages', express.static('uploads/profileImages'));

app.use(bodyParser.json());
app.use("/students", studentsRouter);
app.use("/profileImages", profileImageRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;