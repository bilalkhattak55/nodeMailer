const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer")

router.post("/register", (req, res)=> {
    // console.log(req.body)
    const {email} = req.body;

    try{
      const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
      })

      const mailOptions = {
        from : process.env.EMAIL,
        to : email,
        subject: "latest news of tech",
        html: '<h1>Congratulations you have successfully send Email</h1><p>my name is muhammad bilal and i am not a terrorist</p>'
      }

      transporter.sendMail(mailOptions,(error, info) => {
        if(error){
            console.log("error", error)
        }else {
            console.log("email sent" + info.response);
            res.status(201).json({status:201, info})
        }
      })
    }catch(err){
        res.status(401).json({status:401, err})
    }

})

module.exports = router;


//pass= umbwabblcxehglep