const express = require("express")
const pronptController = require("../controller/prompt-controller")

const routes = express.Router()

routes.post('/api/prompt', pronptController.sendText)

module.exports = routes

// http://localhost:5000/api/prompt