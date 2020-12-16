const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const Router = require("./router/router");
require("dotenv").config();
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(cors());
app.use(Router);

mongoose.connect(
  process.env.MONGODB,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true },
  (e) => {
    if (e) {
      console.log(e);
    } else {
      console.log("Connect mongodb is successfully");
    }
  }
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => console.log("Server is running with port " + port));
