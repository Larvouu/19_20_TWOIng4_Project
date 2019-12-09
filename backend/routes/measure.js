//Ossature provenant de la ressource de cours : https://github.com/cype59/19_20_TWOIng4_Project

var express = require('express');
var router = express.Router();
var measure = require('../controleur/measureControleur');

/* GET one measure */
router.get('/:measureId', measure.findOne);

/* DELETE  one measure */
router.delete('/:measureId', measure.delete);

/* update  one measure */
router.post('/:measureId', measure.update);

/* create  one measure */
router.put('/', measure.create);

module.exports = router;