const express = require("express");
const router = express.Router();
const User = require("../models/User");
const {
  query,
  body,
  matchedData,
  validationResult,
} = require("express-validator");

router.post(
  "/createuser",
  body("email",'Please enter a valid Email ID').isEmail(),
  body("password",'Password should be minimum 5 characters').isLength({ min: 5 }),
  body("name",'Name should be minimum 4 characters').isLength({min:4}),
  async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors)
        return res.status(400).json({errors:errors.array()})
    }

    try {
      await User.create({
        name: req.body.name,
        location: req.body.location,
        password: req.body.password,
        email: req.body.email,
      });
      res.json({ success: true });
    } catch {
      console.log(err);
      res.json({ success: false });
    }
  }
);

router.post(
    "/loginuser",
    body("email",'Please enter a valid Email ID').isEmail(),
    async (req, res) => {
  
      const errors = validationResult(req);
      if(!errors.isEmpty()){
          console.log(errors)
          return res.status(400).json({errors:errors.array()})
      }

      let email = req.body.email;
  
      try {
        let userData = await User.findOne({email})
        if(userData){
            if(req.body.password == userData.password){
               return res.json({success:true})
            }
        }
        else{
            res.status(400).json({errors:"Enter the email!"})
        }
    
        res.json({ success: true });
      } catch {
        console.log(errors);
        res.json({ success: false });
      }
    }
  );

module.exports = router;
