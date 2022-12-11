const express = require("express");
const app = express();
const router = express.Router()


// router.use("/User", require("../Controllers/Users/index"))
router.use("/Owner", require("../Controllers/Oweners/Auth"))
router.use("/Owner/", require("../Controllers/Oweners/addRecipe"))



module.exports = router 