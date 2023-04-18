const express = require('express')
const router = express.Router()
const controllers = require('../controllers/lastScreenControllers')

router.get('/',controllers.login_success)

module.exports = router
