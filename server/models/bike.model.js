const mongoose = require('mongoose')

const bikeSchema = new mongoose.Schema({
  bikename: {
    type: String,
    required: true
  },
  username: {
    type: String,
    // required: true
  },
  description: {
    type: String,
  },
  imageUrl: {
    type: String,
    required: true
  },
  latitude: {
    type: Number,
    // required: true
  },
  longitude: {
    type: Number,
    // required: true
  },
  productionYear: {
    type: Number,
  },
  drivenKms: {
    type: Number
  },
  bikecc: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
}, {timestamps: true})

const Bike = mongoose.model('Bike', bikeSchema)

module.exports = Bike