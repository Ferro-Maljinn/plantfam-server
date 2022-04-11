const router = require("express").Router();
const PlantModel = require("../models/Plant.model");
const { requireLogin } = require("../middleware/authentication.js");

// ********* require fileUploader in order to use it *********
const fileUploader = require('../config/cloudinary.config');

/* GET plantform page */
router.get("/plantform", requireLogin, (req, res, next) => {
  console.log(req.session, "session from plantform")
  res.json({ message: "hello from plantform get" });
});

/* POST plantform page */
router.post("/plantform", fileUploader.single('plant-image'), async (req, res, next) => {

  console.log(req.body, "this is req body")
  try {
    const {
      image,
      description,
      englishName,
      latinName,
      height,
      light,
      watering,
      soilType,
    } = req.body;


    const plant = {
      image: req.file.path,
      description: description,
      englishName: englishName,
      latinName: latinName,
      height: height,
      light: light,
      watering: watering,
      soilType: soilType,
    };

    await PlantModel.create(plant);
    
    res.json({
      plant: {
        image,
        description,
        englishName,
        latinName,
        height,
        light,
        watering,
        soilType,
      },
      message: "successfully created plant!",
    });
  } catch (err) {
    console.log(err, "error from plantform Post");
  }
});

module.exports = router;
