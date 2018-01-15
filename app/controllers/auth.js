const express = require("express");
const model = require("../models/user");

const router = express.Router();

router.post("/", (req, res) => {
  const { lastname, firstname, email, password } = req.body;
  model
    .createUser({ firstname, lastname, email, password, user: "user" })
    .then(result => res.send(result))
    .catch(err => console.log(err));
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  model
    .createUser({ email, password })
    .then(result => res.send(result))
    .catch(err => console.log(err));
});

modules.export = router;
