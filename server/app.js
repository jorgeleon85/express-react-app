const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors("localhost"));
app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/animal", require("./routes/animal.routes"));

module.exports = app;
