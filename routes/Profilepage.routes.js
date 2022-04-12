const router = require("express").Router();
const userController = require("../controllers/userController.js");
const { requireLogin } = require("../middleware/authentication.js");


/* GET home page */
router.get("/profilepage/userid", requireLogin, (req, res, next) => {
  res.json("All good from the profilepage route");
});


module.exports = router;
