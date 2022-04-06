const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good from the index route");
});

module.exports = router;
