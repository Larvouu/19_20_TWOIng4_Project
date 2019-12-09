//Ossature provenant de la ressource de cours : https://github.com/cype59/19_20_TWOIng4_Project

var express = require('express');
var router = express.Router();
var sensor = require('../controleur/sensorControleur');

/* GET one sensor */
router.get('/:sensorId', sensor.findOne);

/* DELETE  one sensor */
router.delete('/:sensorId', sensor.delete);

/* update  one sensor */
router.post('/:sensorId', sensor.update);

/* create  one sensor */
router.put('/', sensor.create);

module.exports = router;