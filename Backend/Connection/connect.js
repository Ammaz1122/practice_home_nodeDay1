const mongoose = require("mongoose")

// connect moongooese with database
const db = async()=>{
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Data is connected on ${mongoose.connection.host.cyan}`)
}

module.exports = db 