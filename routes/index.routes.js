const router = require("express").Router();
const PlantModel = require("../models/Plant.model");

/* GET index page */
router.get("/", async function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

router.use(require("./Login.routes"));

router.use(require("./Signup.routes"));

router.use(require("./Logout.routes"));

router.use(require("./Profilepage.routes"));

router.use(require("./plantform.routes"));

router.use(require("./plantdetails.routes"));

router.use(require("./ListPlants.routes"));

router.use(require("./UpdatePlant.routes"));

router.use(require("./DeletePlant.routes"));

module.exports = router;
