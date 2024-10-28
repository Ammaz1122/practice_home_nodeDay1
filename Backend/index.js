const  express = require("express")
const userRouter = require("./Routes/UserRoutes")
const api= express()


require("colors")
require("dotenv").config()

// add data
api.use("/",userRouter)




api.listen(process.env.PORT,()=>{
    console.log(`Server started on port ${process.env.PORT.red}`)
})