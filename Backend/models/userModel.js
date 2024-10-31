const mongooese = require("mongoose")

// Create the blue print of table/ Collection / Schema

const userSchema = mongooese.Schema({
    m_mail:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },
    full_name:{
        type:String,
        required:true
    },

    username:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    otp:{
        type:Number,
        require:false,
        default:null
    }

},
// at which time return is created updated all details

{
    timestamps:true
}
);


// Export the table in to backend

module.exports = mongooese.model("Users",userSchema)
 

