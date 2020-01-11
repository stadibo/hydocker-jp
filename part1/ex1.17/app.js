const config = require('./utils/config')
const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const { errorHandler } = require('./utils/middleware')

app.use(cors())
app.use(bodyParser.json())

if (config.MONGODB_URI) {
  console.log('connecting to', config.MONGODB_URI)
  
  mongoose.connect(config.MONGODB_URI, { 
    useNewUrlParser: true, 
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
    .then(() => {
      console.log('connected to MongoDB')
    })
    .catch((error) => {
      console.log('error connection to MongoDB:', error.message)
    })
}


app.get("/api/ping", (req, res) => {
  res.json({ message: 'Praise the skeleton' })
})

if (process.env.NODE_ENV === 'production' || process.env.FRONTEND_PATH) {
  const FRONTEND_PATH = process.env.FRONTEND_PATH || path.join(__dirname, './frontend/build')
  app.use(express.static(FRONTEND_PATH))

  app.get('*', (req, res) => {
    res.sendFile(path.join(FRONTEND_PATH, 'index.html'))
  })
}


app.use(errorHandler)

module.exports = app