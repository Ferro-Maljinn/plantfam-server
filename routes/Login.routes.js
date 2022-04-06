const router = require("express").Router();
const UserModel = require("../models/User.model");

/* GET login page */
router.get("/login", (req, res, next) => {
    res.json("login");
});

/* POST login page */
router.post("/login", async (req, res, next) => {
    try {
        const user = await UserModel.findOne({ username: req.body.name });
        const hashFromDb = user.password;
        const passwordCorrect = await bcrypt.compare(req.body.password, hashFromDb);
        console.log(passwordCorrect ? "Yes" : "No");

        if (!passwordCorrect) {
            throw Error("Password incorrect");
        }
        req.session.currentUser = user;
        console.log(req.session.currentUser, "<<<< current user");
        res.json("/home");
    }
    catch (err) {
        res.json("login", { error: "Wrong username or password" });
    }
});

module.exports = router;