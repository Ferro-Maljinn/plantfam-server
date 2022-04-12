const UserModel = require("../models/User.model");

let userController = {
    getAllUserPlants: async (req, res) => {
        console.log(req.params)
     let foundUser = await UserModel.find({name: req.params.name}).populate("plants")
     console.log(foundUser, "loggin from the userController")
     res.json(foundUser)
   }  
 }

 module.exports = userController