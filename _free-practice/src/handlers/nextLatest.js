const express = require("express");
const nextLatest = require("../../projects/nextjs-latest/node_modules/next/dist/server/next");

const router = express.Router();

const dev = false;
// ref: https://nextjs.org/docs/pages/building-your-application/configuring/custom-server
const appLatest = nextLatest({
  dev,
  dir: "./projects/nextjs-latest",
  // hostname: "localhost",
  // customServer: true,
});
const handleLatest = appLatest.getRequestHandler();

router.get("*", async (req, res) => {
  await appLatest.prepare();
  return handleLatest(req, res);
});

module.exports = router;
