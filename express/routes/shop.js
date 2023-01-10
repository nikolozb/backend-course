const express = require('express')
const path = require('path')
const shopControllers = require('../controllers/shop')

const router = express.Router()

router.get('/', shopControllers.getShop)

module.exports = router
