const express = require("express");
const NextLatestHandler = require("./src/handlers/nextLatest");
const NextOldHandler = require("./src/handlers/nextOld");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/projects/old*", NextOldHandler);
app.get("/projects/latest*", NextLatestHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
