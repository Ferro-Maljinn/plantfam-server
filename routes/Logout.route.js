const router = require("express").Router();
const { requireLogin } = require("../middleware/authentication.js");


router.get("/logout", requireLogin, (req, res, next) => {
    res.json({message: "hello from logout"});
});

// since sessions are not working this also will not work yet 

// router.post("/logout", (req, res) => {
//     req.session.destroy((err) => {
//         if (err) return next(err);

//         res.json({message: "successfully logged out"});
//     });
// });

module.exports = router;