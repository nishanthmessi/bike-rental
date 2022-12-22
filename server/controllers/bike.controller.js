const bikeService = require('../services/bike.service')
const { successResponseBody, errorResponseBody } = require('../utils/responsebody')
const { STATUS } = require('../utils/constants')

const createBike = async (req, res) => {
  try {
    const response = await bikeService.createBike(req.body)
    successResponseBody.data = response
    successResponseBody.message = "Successfully registered your bike"

    return res.status(STATUS.CREATED).json(successResponseBody)
  } catch (error) {
    console.log(error)
    if(error.err) {
      errorResponseBody.err = error.err;
      return res.status(error.code).json(errorResponseBody);
    }
    errorResponseBody.err = error;
    return res.status(STATUS.INTERNAL_SERVER_ERROR).json(errorResponseBody);  
  }
}

const getBike = async (req, res) => {
  try {
      const response = await bikeService.getBike(req.params.id);
      successResponseBody.data = response;

      return res.status(STATUS.OK).json(successResponseBody);
  } catch (error) {
      if(error.err) {
          errorResponseBody.err = error.err;
          return res.status(error.code).json(errorResponseBody);
      }
      errorResponseBody.err = error;
      return res.status(STATUS.INTERNAL_SERVER_ERROR).json(errorResponseBody);
  }
}

const getBikes = async (req, res) => {
  try {
      const response = await bikeService.getBikes(req.query);
      successResponseBody.data = response;

      return res.status(STATUS.OK).json(successResponseBody);
  } catch (error) {
      if(error.err) {
        errorResponseBody.err = error.err;
        return res.status(error.code).json(errorResponseBody);
      }
      errorResponseBody.err = error;
      return res.status(STATUS.INTERNAL_SERVER_ERROR).json(errorResponseBody);
  }
}

const updateBike = async (req, res) => {
  try {
    const response = await bikeService.updateBike(req.params.id, req.body);
    successResponseBody.data = response;

    return res.status(STATUS.OK).json(successResponseBody);
  } catch (error) {
    console.log(error)
      if(error.err) {
        errorResponseBody.err = error.err;
        return res.status(error.code).json(errorResponseBody);
      }
      errorResponseBody.err = error;
      return res.status(STATUS.INTERNAL_SERVER_ERROR).json(errorResponseBody);
  }
}

const deleteBike = async (req, res) => {
  try {
    const response = await bikeService.deleteBike(req.params.id)
    successResponseBody.data = response
    successResponseBody.message = "Successfully deleted your bike"

    return res.status(STATUS.OK).json(successResponseBody);
  } catch (error) {
    if(error.err) {
      errorResponseBody.err = error.err;
      return res.status(error.code).json(errorResponseBody);
    }
    errorResponseBody.err = error;
    return res.status(STATUS.INTERNAL_SERVER_ERROR).json(errorResponseBody);  
  }
}

module.exports = {
  createBike,
  getBike,
  getBikes,
  updateBike,
  deleteBike
}