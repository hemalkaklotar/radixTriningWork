const express = require("express")
const router = express.Router()



const loginRouter = require("./Auth/OwnerLogin")
const registerRegister = require("./Auth/OwnerRegister")
router.use("/login", loginRouter)
router.use("/register",registerRegister)


router.post("/addrecipe", (req, res) => {
       console.log("Hello", req.data)
})

module.exports = router 