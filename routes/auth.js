const router = require("express").Router();
const UserModel = require("../models/User.model");

const bcrypt = require("bcrypt");

/* POST login page */
router.post("/login", async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ name: req.body.name });
    const hashFromDb = user.password;
    console.log(user);
    const passwordCorrect = await bcrypt.compare(req.body.password, hashFromDb);
    console.log(passwordCorrect ? "Yes" : "No");

    if (!passwordCorrect) {
      throw Error("Password incorrect");
    }
    req.session.currentUser = { _id: user._id, name: user.name };
    console.log(req.session, "session");
    // TODO return also session cookie
    return res.json({
      user: req.session.currentUser,
      message: "successfully sent currentuser ",
    });
  } catch (err) {
    console.log(err, "error from login");
    res.status(400).json({ error: "Wrong username or password" });
  }
});

router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) return next(err);
    console.log("successfully logged out", req.session);
    res.json({ message: "successfully logged out" });
  });
});

router.post("/signup", async (req, res, next) => {
  console.log(req.session, "session");
  try {
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);

    const user = {
      name: name,
      email: email,
      password: hash,
    };

    const createdUser = await UserModel.create(user);
    req.session.currentUser = { name, email };
    res.json({ user: { name, email }, message: "successfully sent user" });
  } catch (err) {
    console.log(err, "error from signup");
    res.status(400).json({ error: "you already have an account" });
  }
});

module.exports = router;
