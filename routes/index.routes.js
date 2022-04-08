const router = require("express").Router();

/* GET index page */
router.get("/", (req, res, next) => {
  res.json("All good from the index route");
});

router.use(require("./Login.routes"));

router.use(require("./Signup.routes"));

router.use(require("./Logout.routes"));

router.use(require("./Profilepage.routes"));

router.use(require("./plantform.routes"));

router.use(require("./plantdetails.routes"));

router.use(require("./ListPlants.routes"));

module.exports = router;
