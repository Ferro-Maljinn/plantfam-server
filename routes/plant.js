const router = require("express").Router();
const PlantModel = require("../models/Plant.model");

// ---------------------------------------------- GET ALL PLANTS 
router.get("/all", async (req, res) => {
    try {
        const allPlants = await PlantModel.find({});
        res.status(200).json(allPlants);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

// ---------------------------------------------- GET PLANT BY ID
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const plant = await PlantModel.findById(id);
        if (!plant) return res.status(404).send("Plant not found");
        return res.json(plant);
    } catch (e) {
        return res.status(500).send(e.message);
    }
});

// ---------------------------------------------- CREATE PLANT
router.post("/create", async (req, res) => {
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

        const createdPlant = await PlantModel.create({
            image,
            description,
            englishName,
            latinName,
            height,
            light,
            watering,
            soilType,
        });

        return res.json(createdPlant);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

// ---------------------------------------------- UPDATE PLANT
router.put("/update/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { image, description, englishName, latinName, height,
                light, watering, soilType } = req.body;
                
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
            { new: true }
        );
        if (!currentPlant) return res.status(404).send("Plant not found");
        return res.json(currentPlant);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

// ---------------------------------------------- DELETE PLANT
router.delete("/delete/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedPlant = await PlantModel.findByIdAndDelete(id);
        if (!deletedPlant) return res.status(404).send("Plant not found");
        return res.json(deletedPlant);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

module.exports = router;
