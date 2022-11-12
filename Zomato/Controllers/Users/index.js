const express = require("express")
const router = express.Router()

router.use("/login", require("./UserLogin"))
router.use("/register", require("./UserRegister"))




module.exports = router 