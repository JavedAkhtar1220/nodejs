const express = require('express');
const { signupController, loginController } = require('../controllers/authController');
const { getUser } = require('../controllers/getDataController');
const userModel = require('../models/authSchema');
const router = express.Router();

router.post('/api/signup', signupController);
router.post('/api/login', loginController);
router.post('/api/user', getUser);

module.exports = router;