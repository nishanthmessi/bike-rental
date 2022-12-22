const { errorResponseBody } = require('../utils/responsebody')
const { STATUS } = require('../utils/constants')

const validateBikeCreateReq = async (req, res, next) => {
  if(!req.body.bikename) {
    errorResponseBody.err = 'Bike name must be provided'
    return res.status(STATUS.BAD_REQUEST).json(errorResponseBody)
  }

  if(!req.body.imageUrl) {
    errorResponseBody.err = 'Image url must be provided'
    return res.status(STATUS.BAD_REQUEST).json(errorResponseBody)
  }

  if(!req.body.bikecc) {
    errorResponseBody.err = 'Bike CC must be provided'
    return res.status(STATUS.BAD_REQUEST).json(errorResponseBody)
  }

  if(!req.body.price) {
    errorResponseBody.err = 'Bike rent cost for a day must be provided'
    return res.status(STATUS.BAD_REQUEST).json(errorResponseBody)
  }

  next()
}

module.exports = {
  validateBikeCreateReq
}