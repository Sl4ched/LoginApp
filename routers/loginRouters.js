const express = require('express')
const router = express.Router()
const controllers = require('../controllers/loginController')


//get requests
router.get('/',controllers.create_login)
router.get('/get_all_values',controllers.get_val)

//delete requests
router.delete('/:id', controllers.delete_val)

module.exports = router