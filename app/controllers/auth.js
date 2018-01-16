const express = require("express");
const model = require("../models/user");
const { encode } = require('./pwd');

const router = express.Router();

router.post("/login", (req, res) => {
  const { lastname, firstname, email, password } = req.body;
  userInfo.notExist(email)
  .then(result => encode(password))
  .then(hash =>
    user.createUser({ firstname, lastname, email, hash, role: "user" })
   )
   .then(result => res.send(result))
   .catch(err => console.log(err));
});

router.post("/login/test", (req, res) => {
  const { email, password } = req.body;
  user.getByEmail(email)
  .then(data => {
   // const authorized = data ? data.password === password : false;
   return compare(password, user.password).then( authorized => {
    return res.json(authorized ? data : false)
   })
  })
  .catch(err => console.log(err))
});

module.exports = router;
