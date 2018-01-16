const express = require("express");
const model = require("../models/user");
const { encode } = require('./pwd');

const router = express.Router();

router.post("/register", (req, res) => {
  const { lastname, firstname, email, password } = req.body;
  userInfo.notExist(email)
  .then(result => encode(password))
  .then(hash =>
    user.createUser({ firstname, lastname, email, hash, role: "user" })
   )
   .then(result => res.send(result))
   .catch(err => console.log(err));
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  
  user.getByEmail(email)
  .then(data => {
    return compare(password, user.password)
  .then( authorized => {
    const SECRET = 'coucou'
    const { id, firstname, lastname, email, role } = user;
    
    if(authorized) 
      const token = jwt.sign({ id, email, role}, SECRET);
      return res.json({ token, user: { id, firstname, lastname }})
   })
  })
  .catch(err => console.log(err))
});

module.exports = router;
