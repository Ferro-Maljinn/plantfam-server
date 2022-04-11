const router = require("express").Router();
const Plant = require("../models/Plant.model");

router.delete("/deletePlant", async (req, res, next) => {
  console.log("here is the body", req.body);
  try {
    const { id } = req.body;
    await Plant.findByIdAndDelete(id);
    res.json({ message: "Successfully deleted your plant" + id });
  } catch (err) {
    res
      .status(400)
      .json({ errorMessage: "Error in deleting your plant!" + err.message });
  }
});

module.exports = router;
