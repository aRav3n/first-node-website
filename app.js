// to view go to http://localhost:8080/

const express = require("express");
const http = require("http");
const url = require("url");
const fs = require("fs");
const app = express();

function filenameWithPath(filename) {
  return `${__dirname}/${filename}.html`;
}

app.get("/", function (req, res) {
  res.sendFile(filenameWithPath("index"));
});

app.get("/about.html", function (req, res) {
  res.sendFile(filenameWithPath("about"));
});

app.get("/contact.html", function (req, res) {
  res.sendFile(filenameWithPath("contact"));
});

app.use((req, res, next) => {
  res.status(404).sendFile(filenameWithPath("404"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT);
