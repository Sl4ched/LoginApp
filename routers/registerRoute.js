const express = require('express')
const router = express.Router()
const controllers = require('../controllers/registerController')

//get requests
router.get('/', controllers.get_reg_page)

//post requests
router.post('/', controllers.post_register)

module.exports = router