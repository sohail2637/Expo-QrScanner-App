const mongoose = require("mongoose");
const { hash } = require("bcrypt");
const bcrpyt = require("bcrypt");

const userSchecma = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
userSchecma.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  bcrpyt.genSalt(10, (error, salt) => {
    if (error) {
      return next(error);
    }
    bcrpyt.hash(user.password, salt, (error, hash) => {
      if (error) {
        console.log(error);
        return next(error);
      }
      console.log(hash);
      user.password = hash;
      next();
    });
  });
});
userSchecma.methods.comparePassword = function (canidatePassword) {
  const user = this;
  return new Promise((resolve, reject) => {
    bcrpyt.compare(canidatePassword, user.password, (error, isMatch) => {
      if (error) {
        // error.message = "password is wrong";
        return reject(error);
      }
      if (!isMatch) {
        // error.message = "password is wrong";
        return reject(error);
      }
      resolve(true);
    });
  });
};

mongoose.model("User", userSchecma);
