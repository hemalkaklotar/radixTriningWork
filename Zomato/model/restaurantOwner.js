const mongoose = require("mongoose")
const validator = require("validator")

const OwnerSchema = new mongoose.Schema({
       Firstname: {
              type: String,
              required: [true, "FirstName cannot be blank"],
              maxLength: ["12", "FirstName cannot be exceed 12 character"],
              MinLength: ["3", "FirstName shouldhave Atleast 3 character"],
       },
       LastName: {
              type: String,
              maxLength: ["12", "LastName cannot be exceed 12 character"],
              MinLength: ["3", "LastName shouldhave Atleast 3 character"],
       },
       Email: {
              type: String,
              required: [true, "LastName cannot be blank"],
              unique: true,
              validate: [validator.isEmail, "Plaease Insert valid Email"]
       },
       Password: {
              type: String,
              required: [true, "Password cannot be blank"]
       },
       CreatedAt: {
              type: Date,
              default: Date.now()
       }
})
const RESTAURANT_OWNER = mongoose.model("RESTAURANT_OWNER", OwnerSchema)

module.exports = { RESTAURANT_OWNER }