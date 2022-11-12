const express = require("express");
const app = express();
const bodyparser = require("body-parser")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const USER = require("./model/userModel").USER
const RESTAURANTOWNER = require("./model/restaurantOwner").RESTAURANTOWNER


app.use(bodyparser.json())
app.use("/", require("./Routes/index"))

app.listen("3000", () => {
       console.log("Listening on port 3000")
})
mongoose.connect("mongodb://localhost:27017/Zomato", () => {
       console.log("Connected to database")
})

// app.post("/admin", )


