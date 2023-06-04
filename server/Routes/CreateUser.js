const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.post('/createUser',async (req,res) => {
    try{
        await User.create({
            name: "Shyam Das",
            location:"Mumbai",
            password:"shyam",
            email:"shyam@gmail.com",
        })
        res.json({success:true})
    }
    catch{
        console.log(err);
        res.json({success:false})
    }
})

module.exports = router