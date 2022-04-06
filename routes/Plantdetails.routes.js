const router = require("express").Router();

/* GET home page */
router.get("/plantdetails", (req, res, next) => {
  res.json("All good from the plantdetails route");
});

module.exports = router;
