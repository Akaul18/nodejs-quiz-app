const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.connection.remoteAddress);
  res.send(`${req.method} request for '${req.url}'`);
});

module.exports = router;
