const router = require("express").Router();

router.post("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) return next(err);
        console.log('successfully logged out', req.session)
        res.json({message: "successfully logged out"});
    });
});


module.exports = router;