var express = require('express');
var router = express.Router();

// Load Controller
const FindAllController = require('../controllers/FindAllController');

// Set route to handle our GET request from our controller
router.route('/requests').get(FindAllController.find);


module.exports = router;