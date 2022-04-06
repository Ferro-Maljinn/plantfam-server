const router = require("express").Router();
const { requireLogin } = require("../middleware/authentication.js");

/* GET home page */
router.get("/profilepage", requireLogin, (req, res, next) => {
  res.json("All good from the profilepage route");
});

module.exports = router;
