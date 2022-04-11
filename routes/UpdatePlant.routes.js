const router = require("express").Router();
const PlantModel = require("../models/Plant.model");

/*  updatePlant page */
// router.post("/updatePlant", async (req, res, next) => {
//     try{
//         const currentPlant = await PlantModel.findOne({ plantId: req.session.currentUser._id });
//         console.log(req.session.currentUser.plants._id, "currentplant")
//         res.json("All good from the updateplant route");
//     }
//     catch(err){
//         console.log(err, "error from update plant")
//     }
  
// });

router.post("/updatePlants", async (req, res, next) => {
    console.log(req.params, "what are we logging here?")
  
    const singlePlant = await PlantModel.findByIdAndUpdate({})
    console.log(singlePlant)
  
    res.status(200).json({singlePlant});
  });
  


module.exports = router;