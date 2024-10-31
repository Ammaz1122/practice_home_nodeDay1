const  express = require("express")
const userRouter = require("./Routes/UserRoutes")
const ErrorMessage = require("./middlewares/errorMessage")
const db = require("./Connection/connect")
const api= express()


require("colors")
require("dotenv").config()


db()



// Convert data into  JSON
api.use(express.json())

// Convert JSON in to URL encoded Format
api.use(express.urlencoded({extended:false}))



// Register User 
api.use("/api/user/",userRouter)






// Call Middle-Ware after an Api

api.use(ErrorMessage)


api.listen(process.env.PORT,()=>{
    console.log(`Server started on port ${process.env.PORT.red}`)
})