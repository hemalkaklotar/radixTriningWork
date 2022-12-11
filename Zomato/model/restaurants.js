const mongoose = require("mongoose")
const validator = require("validator")

const Restaurants = new mongoose.Schema({

       RestaurantName: {
              type: String,
              required: [true, "FirstName cannot be blank"],
              maxLength: ["35", "RestaurantName cannot be exceed 35 character"],
              MinLength: ["3", "RestaurantName should have Atleast 3 character"],
       },
       Address: {
              Area: {
                     type: String,
                     required: [true, "Area can't  be blanks"]
              },
              Pincode: {
                     type: Number,
                     required: [true, "Pincode can't be blank"]
              },
              Landmark: {
                     type: String,
                     required: [true, "Landmark can't be blank"]
              },
              City: {
                     type: String,
                     required: [true, "City can't be blank"]
              },
              State: {
                     type: String,
                     required: [true, "City can't be blank"]
              }
       }
})

const RESTAURANTS = mongoose.model("RESTAURANTS", Restaurants)

module.exports = { RESTAURANTS }