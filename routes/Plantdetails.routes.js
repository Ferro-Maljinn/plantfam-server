const router = require("express").Router();
const PlantModel = require("../models/Plant.model");

/* GET home page */
router.get("/plantdetails/:plantId", async (req, res, next) => {
  console.log(req.params)

  const singlePlant = await PlantModel.findById(req.params.plantId)
  console.log(singlePlant)

  res.status(200).json({singlePlant});
});


module.exports = router;
