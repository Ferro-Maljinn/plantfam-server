const router = require("express").Router();
const PlantModel = require("../models/Plant.model");
const { requireLogin } = require("../middleware/authentication.js");
const User = require("../models/User.model");

/* GET plantform page */
router.get("/plantform", requireLogin, (req, res, next) => {
  console.log(req.session, "session from plantform");
  res.json({ message: "hello from plantform get" });
});

/* POST plantform page */
router.post("/plantform", async (req, res, next) => {
  console.log(req.session, "this is req session");
  const currentUser = await User.findOne({
    email: req.session.currentUser._id,
  });
  console.log(currentUser, "currentuser");
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
      image: image,
      description: description,
      englishName: englishName,
      latinName: latinName,
      height: height,
      light: light,
      watering: watering,
      soilType: soilType,
      owner: req.session.currentUser._id,
    };

    let plantid = await PlantModel.create(plant);

    res.status(200).json({
      plant,
      message: "successfully created plant!",
    });
  } catch (err) {
    console.log(err, "error from plantform Post");
  }
});

module.exports = router;
