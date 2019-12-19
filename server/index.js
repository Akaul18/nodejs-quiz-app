const express = require("express");
const { startDb } = require("./db");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json({ urlencoded: false }));

app.set("json spaces", 2); //remove this line when app is in prod

app.use(require("./routes"));

app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  res.status(404).send("Unknown request");
  next();
});

startDb().once("open", () => {
  app.listen(port, () => {
    console.log(`express server running on ${port}`);
  });
});
