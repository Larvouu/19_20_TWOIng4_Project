var express = require('express');
var router = express.Router();
var sensor = require('../controleur/sensorControleur');

/* GET sensors listing. */
router.get('/', sensor.findAll);

module.exports = router;