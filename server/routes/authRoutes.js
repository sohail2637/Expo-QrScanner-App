const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { jwtkey } = require("../keys");
const user = mongoose.model("User");

router.post("/signup", async (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body;
  try {
    const userData = new user({ email, password });
    await userData.save();
    const token = jwt.sign({ userid: userData._id }, jwtkey);
    res.send({ token });
  } catch (error) {
    return res.status(422).send(error.message);
  }
});
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).send({ error: "must provide email and password" });
  }
  const userinfo = await user.findOne({ email });
  if (!userinfo) {
    return res.status(422).send({ error: "must provide email and password" });
  }
  try {
    // console.log(userinfo);
    await userinfo.comparePassword(password, userinfo.password);
    const token = jwt.sign({ userid: userinfo._id }, jwtkey);
    res.send({ token });
  } catch (error) {
    console.log;
    return res.status(422).send({ message: "password dose not match" });
  }
});

module.exports = router;
