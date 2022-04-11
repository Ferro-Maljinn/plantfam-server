const router = require("express").Router();
const PlantModel = require("../models/Plant.model")

// router.get('/', async function(req, res) {
//     let responseFromDB = await PlantModel.find();
//     console.log("response from db", responseFromDB);
//     res.status(200).json(responseFromDB);
// })


module.exports = router;