const express = require("express");
const model = require("../models/user");

const router = express.Router();

router.post("/login", (req, res) => {
  const { lastname, firstname, email, password } = req.body;
  model
    .createUser({ firstname, lastname, email, password, user: "user" })
    .then(result => res.send(result))
    .catch(err => console.log(err));
});

router.post("/login/test", (req, res) => {
  const { email, password } = req.body;
  user.getByEmail(email)
  .then(data => {
    const authorized = data ? data.password === password : false;
    return res.json(authorized ? data : false)
  })
  .catch(err => console.log(err))
});

module.exports = router;
