const router = require("express").Router();
const { requireLogin } = require("../middleware/authentication.js");
const UserModel = require("../models/User.model");

/* GET home page */
router.get("/profilepage", requireLogin, (req, res, next) => {
  res.json("All good from the profilepage route");
});

// ---------------------------------------------- GET ME DATA BY SESSION
router.get("/me", async (req, res) => {
  try {
    // TODO NOT WORKING - WHY??
    // let me = await UserModel.findOne({_id: req.session.currentUser._id})
    // if (!me) return res.status(404).send("User not found");
    return res.json(req.session);
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

// ---------------------------------------------- GET USER BY ID
router.get("/:id", async (req, res) => {
  try {
    let user = await UserModel.findOne(id);
    if (!user) return res.status(404).send("User not found");
    return res.json(user);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

/* GET index page */
router.get('/test', async function(req, res) {
  let plantresponseFromDB = await PlantModel.find();
  let userResponseFromDB = await UserModel.findOne({_id: req.session.currentUser._id})
  let combinedResponse = {
      allPlants: plantresponseFromDB,
      currentUser: userResponseFromDB,
  }
  res.status(200).json(combinedResponse);
})

module.exports = router;
