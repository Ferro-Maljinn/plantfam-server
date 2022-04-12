const router = require("express").Router();
const Plant = require("../models/Plant.model");

router.delete("/deleteplant/:id", async (req, res, next) => {
  // console.log("here is the body", req.body);

  try {
    const { id } = req.params;
    await Plant.findByIdAndDelete(id);
    return res.json({ message: "Successfully deleted your plant " + id });
  } catch (err) {
    return res
      .status(400)
      .json({ errorMessage: "Error in deleting your plant!" + err.message });
  }
});


module.exports = router;
