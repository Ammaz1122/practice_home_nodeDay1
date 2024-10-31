const express = require("express");
const {getData, updateData, deleteData, registerUser } = require("../Contorller/UserController");
const userRouter  = express.Router();


userRouter.post("/add-data",registerUser)
// userRouter.get("/get-data",getData)
// userRouter.put("/update-data/:id",updateData)
// userRouter.delete("/delete-data/:id",deleteData)



module.exports = userRouter