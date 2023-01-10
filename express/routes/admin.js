const express = require('express')
const path = require('path')
const adminControllers = require('../controllers/admin')

const router = express.Router()

router.get('/add-product', adminControllers.getAddProduct)

router.post('/add-product', adminControllers.postAddProduct)

exports.routes = router
