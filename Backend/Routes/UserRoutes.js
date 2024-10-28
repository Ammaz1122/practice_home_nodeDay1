const express = require("express");
const { addData, getData, updateData, deleteData } = require("../Contorller/UserController");
const userRouter  = express.Router();


userRouter.post("/add-data",addData)
userRouter.get("/get-data",getData)
userRouter.put("/update-data/:id",updateData)
userRouter.delete("/delete-data/:id",deleteData)



module.exports = userRouter