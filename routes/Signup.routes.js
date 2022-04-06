const router = require("express").Router();
const UserModel = require("../models/User.model");
const bcrypt = require("bcrypt");
const { requireLogout } = require("../middleware/authentication.js");

/* GET signup page */
router.get("/signup", requireLogout, (req, res, next) => {
    res.json({ message: "hello from signup get"});
});

router.post("/signup", async (req, res, next) => {
    console.log(req.body, "<<<")
    console.log(req.session, "session")
    try{
    const {name, email, password} = req.body;

    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);

    const user = {
        name: name,
        email: email,
        password: hash,
    }
    await UserModel.create(user);
    // req.session.currentUser = {name, email};
    res.json({user: {name, email}, message: "successfully sent user"});
    }
    catch(err){
        console.log(err, "error from signup")
        res.status(400).json({ error: "you already have an account"})
    }
});


module.exports = router;
