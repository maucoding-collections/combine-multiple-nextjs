const express = require("express");
// const nextJSOld = require("./handlers/nextJSOld");
// const nextJSLatest = require("./handlers/nextJSLattest");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`App ready on port ${port}`);
});
// app.get("/projects/old*", nextJSOld);
// app.get("/projects/latest*", nextJSLatest);

app.listen(port, () => {
  console.log(`App ready on port ${port}`);
});
