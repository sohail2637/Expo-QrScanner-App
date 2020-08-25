const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { jwtkey } = require("../../keys");
const User = mongoose.model("User");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).send({ error: "you must be signin" });
  }
  const token = authorization.split(" ")[1];
  //   console.log(token);

  jwt.verify(token, jwtkey, async (error, paylod) => {
    if (error) {
      //   console.log(error);
      return res.status(401).send({ error: "you must be signin" });
    }
    const { userid } = paylod;
    const user = await User.findById(userid);
    req.user = user;
    next();
  });
};
