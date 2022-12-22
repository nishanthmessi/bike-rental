const bikeController = require('../controllers/bike.controller')
const bikeMiddleware = require('../middlewares/bike.middleware')

const routes = (app) => {
  app.post('/api/v1/bike/create',
    bikeController.createBike,
    bikeMiddleware.validateBikeCreateReq
  )

  app.get('/api/v1/bike/:id',
    bikeController.getBike,
  )

  app.get('/api/v1/bikes',
    bikeController.getBikes,
  )

  app.put('/api/v1/bike/:id',
    bikeController.updateBike,
  )

  app.delete('/api/v1/bike/:id',
    bikeController.deleteBike,
  )
}

module.exports = routes