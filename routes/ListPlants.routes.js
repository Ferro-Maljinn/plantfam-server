const router = require("express").Router();
const PlantModel = require("../models/Plant.model")

router.get('/listPlants', async function(req, res) {
    let responseFromDB = await PlantModel.find();
    console.log(responseFromDB);
    res.status(200).json(responseFromDB);
})


module.exports = router;