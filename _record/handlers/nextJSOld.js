const express = require("express");
const nextOld = require("../projects/nextjs-old/node_modules/next/dist/server/next");

const router = express.Router();

const appOld = nextOld({
  dev: false,
  dir: "./projects/nextjs-old",
});

const handleOld = appOld.getRequestHandler();

router.get("*", async (req, res) => {
  await appOld.prepare();
  return handleOld(req, res);
});

module.exports = router;
