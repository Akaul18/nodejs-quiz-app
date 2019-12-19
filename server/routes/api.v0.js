const express = require("express");
const Quesans = require("../model/Schema");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.connection.remoteAddress);
  // res.send(`${req.method} request for '${req.url}'`);
  Quesans.find().then(resp => res.send(resp));
});

router.get("/questions", (req, res) => {
  console.log(`${req.method} request for '${req.url}'`);
  let obj = {};
  Quesans.find()
    .then(docs => {
      docs.forEach(response => {
        obj[response.question] = response.correct_answer;
        // console.log(i);
      });
      res.send(obj);
      // console.log(obj);
    })
    .catch(err => console.error);
});

module.exports = router;
