const router = require("express").Router();
const PlantModel = require("../models/Plant.model")

/* GET index page */
router.get('/', async function(req, res) {
    let responseFromDB = await PlantModel.find();
    console.log("response from db", responseFromDB);
    res.status(200).json(responseFromDB);
})

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
