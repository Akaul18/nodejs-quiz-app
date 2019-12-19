const express = require("express");
const router = express.Router();

router.use("/api", require("./api.v0.js")); //we can set a middle and route the traffic to specific file with that route

router.get("/test", (req, res) => {
  console.log(`${req.method} request for '${req.url}'`);
  res.send(`${req.method} request for '${req.url}'`);
});

module.exports = router;
