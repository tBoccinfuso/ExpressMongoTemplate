var express = require('express');
var router = express.Router();

// Load Controller
const InsertController = require('../controllers/InsertController');

// Set route to handle our POST request from our controller
router.route('/').post(InsertController.insert);

module.exports = router;