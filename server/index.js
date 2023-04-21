const reserveRouter = require('../routes/reserves')
const dishesRouter = require('../routes/dishes')
const express = require('express')

function apiRouter(app){
  const router = express.Router()
  app.use('/api/v1',router)
  router.use('/reserves',reserveRouter)
  router.use('/dishes',dishesRouter)
}

module.exports = apiRouter

