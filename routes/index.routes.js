const router = require("express").Router();
const Plant = require("../models/Plant.model");
const PlantModel = require("../models/Plant.model")
const UserModel = require("../models/User.model")

/* GET index page */
router.get('/', async function(req, res) {
    let plantresponseFromDB = await PlantModel.find();
    let userResponseFromDB = await UserModel.findOne({_id: req.session.currentUser._id})
    let combinedResponse = {
        allPlants: plantresponseFromDB,
        currentUser: userResponseFromDB,
    }
    res.status(200).json(combinedResponse);
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
