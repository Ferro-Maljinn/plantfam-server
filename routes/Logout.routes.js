const router = require("express").Router();
const { requireLogin } = require("../middleware/authentication.js");

router.post("/logout", requireLogin, (req, res) => {
    req.session.destroy((err) => {
        if (err) return next(err);
        console.log('successfully logged out')
        res.json({message: "successfully logged out"});
    });
});

module.exports = router;