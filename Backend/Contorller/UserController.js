const async_handler = require("express-async-handler");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt")
const nodemailer = require("nodemailer")


// Fucnction to generate an OTP

    const generateOTP = ()=>{
        // its is used to create a random number of 6 digits
        const random = Math.random() * 99999
        // round off number 
        const round = Math.round(random)

        return round
    }


const registerUser = async_handler(async(req,res)=>{
   
    // Data get from Form and Destruture it 
    const {m_mail , password , full_name, username,dob} = req.body;



    // if the user does not entered the value of any feild than it throws an error
    if(!m_mail || !password || !full_name || !username || !dob){
        res.status(400)  // bad request
        throw new Error("Please entered all the data in the feilds")
    }

   
    // Hash the password of sign up form
    const hashPassword = await bcrypt.hash(password,10)



    // Check email exists in data base 
    // find one is a method check the data in table if its exists it throws an error otherwise its send data to the data base
    const checkEmail = await userModel.findOne({
        m_mail:m_mail, // check email in front end or backend (key is backend and value is front-end)
    });

    if(checkEmail){
        res.status(401) // Un-authorized
        throw new Error("Email Already Exists")
    }

    


    // const dateOfBirth = await userModel.findOne({
    //     dob:dob
    // })

    // if(dateOfBirth){
    //     res.status(401) // unauthorized
    //     throw new Error("Date of birth already exists")
    // }

    // Generate OTP 
   
    const otp = generateOTP()




    // send the data to the database

    const createdUser = await userModel.create({
        full_name, // backend (from Model) : frontend (req.body)
        m_mail,
        password: hashPassword,
        username : username,
        dob,
        otp
    })

    // send mail

    // 1. Create a transporter / configurtaion
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.MAIL_USERNAME,
            pass:process.env.MAIL_PASSWORD
        }
    })


    //2nd step What should be send in the mail
    const options = {
        from : process.env.MAIL_USERNAME,
        to : m_mail,
        subject: 'OTP verification Code is:  ',
        text:`Verfication code is ${otp}` 
    }


    // send mail
    transporter.sendMail(options,(err,info)=>{
        if(err){
            console.log(err.message)
        }else{
            console.log("email Sends successfully ")
        }
    })



    // res.json({
    //     m_mail , password , full_name, username
    // });

    res.send(createdUser)


});

// const getData = (req,res)=>{
//     res.send("get data extracted succesfully")
// }

// const updateData =(req,res)=>{
//     const data = req.params.id;
//     res.send(`Data has been updated on ${data}`)
// }

// const deleteData = (req,res)=>{
//     const delete_data = req.params.id;
//     res.send(`Data is deleted on id ${delete_data}`)

// }





module.exports = {
    registerUser,
    // getData,
    // updateData,
    // deleteData
}