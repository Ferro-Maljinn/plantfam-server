const { Schema, model } = require("mongoose");

const plantSchema = new Schema({
  image: {
    type: String,
    imageUrl: String,
  },
  description: {
    type: String,
  },
  englishName: {
    type: String,
    required: [true, "Please provide the english name for the plant"],
  },
  latinName: {
    type: String,
    required: [true, "Please provide the latin name for the plant"],
  },
  height: {
    type: Number,
  },
  light: {
    type: String,
  },
  watering: {
    type: String,
  },
  soilType: {
      type: String,
  }
});

const Plant = model("Plant", plantSchema);

module.exports = Plant;
