require("dotenv").config()
const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
let jwt = require("jsonwebtoken")
const RESTAURANT_OWNER = require("../../model/restaurantOwner").RESTAURANT_OWNER

router.post("/Login", async (req, res) => {
       const { Email, Password } = req.body
       console.log(Email, Password)
       const isOwnerExist = await RESTAURANT_OWNER.find({ Email })
       if (isOwnerExist.length <= 0) {
              res.status(200).send("No User Registerd With This EmailID")
       }
       else {
              const comparePassword = await bcrypt.compare(Password, isOwnerExist[0].Password)
              if (comparePassword) {
                     let JWTSECRETEKEY = process.env.JWT_SECREATE_KEY
                     let { _id, ...OtherFeilds } = isOwnerExist[0]._doc
                     console.log(OtherFeilds)
                     const TOKEN = jwt.sign(OtherFeilds, JWTSECRETEKEY)
                     res.send(TOKEN)
              }
              
              else {
                     res.send("Email Id or Password Is Incorrect")
              }
       }
})
router.post("/Register", async (req, res) => {

       const { Firstname, LastName, Email, Password } = req.body
       console.log(req.body)

       // password encryption
       const salt = await bcrypt.genSalt(6)
       const hasedPass = await bcrypt.hash(Password, salt)
       console.log(hasedPass)

       //add user with encrypted password
       const adduser = await new RESTAURANT_OWNER({
              Firstname, LastName, Email, Password: hasedPass
       })
       const result = await adduser.save()
       if (result) {
              res.status(200).json("User Added Sucessfully ")
       }

})
module.exports = router 