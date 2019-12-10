var express = require('express');
var router = express.Router();
var sensor = require('../controleur/sensorControleur');

/* GET sensors listing. */
router.get('/', sensor.findAll);

/** GET sensors par location */
router.get('/location/:location', sensor.findAllByLocation);

module.exports = router;