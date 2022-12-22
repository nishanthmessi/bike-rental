const Bike = require('../models/bike.model')
const { STATUS } = require('../utils/constants')

const createBike = async (bikeData) => {
  try {
    const bike = await Bike.create(bikeData)
    return bike
  } catch (error) {
    console.log(error)
    throw {error : error, code: STATUS.UNPROCESSABLE_ENTITY}
  }
}

const getBikes = async (filter) => {
  let query = {}
  if(filter.bikename) {
    query.bikename = filter.bikename
  }

  let bikes = await Bike.find(query)
  if(!bikes) {
    throw {
      error: 'Unable to fetch the bikes data',
      code: STATUS.NOT_FOUND
    }
  }

  return bikes
}

const getBike = async (id) => {
  const bike = await Bike.findById(id)
  if(!bike) {
    throw {
      error: 'Unable to find the bike',
      code: STATUS.NOT_FOUND
    }
  }

  return bike
}

const updateBike = async (id, data) => {
  try {
    const bike = await Bike.findByIdAndUpdate(id, data)
    return bike
  } catch (error) {
    console.log(error)
    throw {error : error, code: STATUS.UNPROCESSABLE_ENTITY}
  }
}

const deleteBike = async (id) => {
  try {
    const response = await Bike.findByIdAndDelete(id)
    if(!response) {
      throw {
        error: "No bike found for the id provided",
        code: STATUS.NOT_FOUND
      }
    }
    return response
  } catch (error) {
    console.log(error)
    throw {error : error, code: STATUS.UNPROCESSABLE_ENTITY}
  }
}

module.exports = {
  createBike,
  getBikes,
  getBike,
  updateBike,
  deleteBike
}

// {
//   "bikename": "Yamaha R1",
//   "description": "The Yamaha YZF-R1, or simply R1, is a 1,000 cc-class sports motorcycle made by Yamaha. It was first released in 1998",
//   "imageUrl": "https://images.unsplash.com/photo-1571646036117-8015cc02547c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
//   "bikecc": "998cc",
//   "price": "400"
// }