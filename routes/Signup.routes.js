const router = require("express").Router();
const UserModel = require("../models/User.model");
const bcrypt = require("bcryptjs");

/* GET signup page */
router.get("/signup", (req, res, next) => {
    res.json("signup");
});

router.post("/signup", (req, res, next) => {
    try{
    const {name, email, password} = req.body;

    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);

    const user = {
        username: name,
        password: hash,
    }

    await UserModel.create(user);
    res.json("/login");

    }
    catch(err){
        console.log(err, "error from signup")
        res.json("signup", { error: "you already have an account" })
    }
});


module.exports = router;
