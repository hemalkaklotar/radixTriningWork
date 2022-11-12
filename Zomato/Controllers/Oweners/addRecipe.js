require("dotenv").config()
const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
let jwt = require("jsonwebtoken")

const VerifyToken = require("../../Util/VerifyToen").verifyToken
const RESTAURANT_OWNER = require("../../model/restaurantOwner").RESTAURANT_OWNER

router.use(VerifyToken)
router.post("AddRecipe", async (req, res) => {
       console.log(req.data)
})

module.exports = router 
