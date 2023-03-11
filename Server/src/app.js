const express = require("express")
const nodemon = require("nodemon")

require("dotenv").config()

const app = express()

app.use(express.json())
app.use(nodemon)

module.exports = app