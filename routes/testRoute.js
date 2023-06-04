const express = require('express')
const route = express.Router()

const {getTest} = require('../controller/testController')

route.get('/',getTest)


module.exports = route

