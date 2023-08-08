const express = require("express");
const nextOld = require("../../projects/nextjs-old/node_modules/next/dist/server/next");

const router = express.Router();

const dev = false;
// ref: https://nextjs.org/docs/pages/building-your-application/configuring/custom-server
const appOld = nextOld({
  dev,
  dir: "./projects/nextjs-old",
  // hostname: "localhost",
  // customServer: true,
});
const handleOld = appOld.getRequestHandler();

router.get("*", async (req, res) => {
  await appOld.prepare();
  return handleOld(req, res);
});

module.exports = router;
