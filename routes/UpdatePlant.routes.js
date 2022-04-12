const router = require("express").Router();
const PlantModel = require("../models/Plant.model");

/* GET updatePlant page */
router.put("/update/plant/:id", async (req, res, next) => {
  console.log("arrived in update plant");
  try {
    const { id } = req.params;
    const { image, description, englishName, latinName,  height, light, watering, soilType} = req.body;
    const currentPlant = await PlantModel.findOneAndUpdate(
      id,
      {
        image: image,
        description: description,
        englishName: englishName,
        latinName: latinName,
        height: height,
        light: light,
        watering: watering,
        soilType: soilType,
      },
      {
        new: true,
      }
    );
    return res.json(currentPlant);
  } catch (err) {
    console.log(err, "error from update plant");
  }
});

router.post("/updatePlants", async (req, res, next) => {
    console.log(req.params, "what are we logging here?")
  
    const singlePlant = await PlantModel.findByIdAndUpdate({})
    console.log(singlePlant)
  
    res.status(200).json({singlePlant});
  });
  


module.exports = router;