var express = require('express');
var router = express.Router();
var measure = require('../controleur/measureControleur');

/* GET measures listing. */
router.get('/', measure.findAll);

/** GET measures types */
router.get('/humidity', measure.getTypeHumidity);
router.get('/temperature', measure.getTypeTemperature);
router.get('/airPollution', measure.getTypeAirPollution);

module.exports = router;