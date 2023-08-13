const express = require("express");
const nextLatest = require("../projects/nextjs-latest/node_modules/next/dist/server/next");

const router = express.Router();

const appLatest = nextLatest({
  dev: false,
  dir: "./projects/nextjs-latest",
});

const handleLatest = appLatest.getRequestHandler();

router.get("*", async (req, res) => {
  await appLatest.prepare();
  return handleLatest(req, res);
});

module.exports = router;
