const express = require("express");
// const Quesans = require("../model/Schema");
// const bodyParser = require("body-parser");
const router = express.Router();

router.use("/api", require("./api.v0.js")); //we can set a middle and route the traffic to specific file with that route
// router.get("/test", (req, res) => {
//   // Quesans.create(req.body)
//   //   .then(() => {
//   //     console.log("saved to mongo db");
//   //   })
//   //   .catch(err => console.log(err));
// });

module.exports = router;
