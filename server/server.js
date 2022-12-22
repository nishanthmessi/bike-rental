require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

const BikeRoutes = require('./routes/bike.routes')

app.use(cors())
app.use(express.json())

BikeRoutes(app)

app.get('/', (req, res) => {
  res.send('Welcome to our server')
})

mongoose.set('strictQuery', false);

const PORT = process.env.PORT || 5001
app.listen(PORT, async() => {
  console.log(`Server listening on ${PORT}`)

  try {
    mongoose.connect(process.env.DB_URL)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.log('Not able to connect mongodb', error);
  }
})