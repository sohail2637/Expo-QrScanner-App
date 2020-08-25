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
userSchecma.pre("save", () => {
  if (!user.isModified("password")) {
    return next();
  }
  bcrpyt.genSalt(10, (error, salt) => {
    if (error) {
      return next(error);
    }
    bcrpyt.hash(user.password, salt, (error, salt) => {
      if (error) {
        return next(error);
      }
      user.password = hash;
      next();
    });
  });
});
userSchecma.method.comparePassword = (canidatePassword) => {
  return new Promise((resolve, reject) => {
    bcrpyt.compare(canidatePassword, user.password, (error, isMatch) => {
      if (error) {
        return reject(error);
      }
      if (!isMatch) {
        return reject(error);
      }
      resolve(true);
    });
  });
};

mongoose.model("User", userSchecma);
