const router = require("express").Router();
const UserModel = require("../models/User.model");
const { requireLogout } = require("../middleware/authentication.js");
const bcrypt = require("bcrypt");

/* GET login page */
router.get("/login", requireLogout, (req, res, next) => {
    res.json({ message: "hello from login get"});
});

/* POST login page */
router.post("/login", async (req, res, next) => {
    try {
        const user = await UserModel.findOne({ name: req.body.name });
        const hashFromDb = user.password;
        console.log(user)
        const passwordCorrect = await bcrypt.compare(req.body.password, hashFromDb);
        console.log(passwordCorrect ? "Yes" : "No");

        if (!passwordCorrect) {
            throw Error("Password incorrect");
        }
        req.session.currentUser = user;
        console.log(req.session.currentUser, "<<<< current user");
        res.json({currentUser, message: "successfully sent currentuser "});
    }
    catch (err) {
        res.status(400).json({ error: "Wrong username or password" });
    }
});

module.exports = router;