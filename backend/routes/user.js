//Ossature provenant de la ressource de cours : https://github.com/cype59/19_20_TWOIng4_Project

var express = require('express');
var router = express.Router();
var user = require('../controleur/userControleur');

/* GET one user */
router.get('/:userId', user.findOne);

/* DELETE  one user */
router.delete('/:userId', user.delete);

/* update  one user */
router.post('/:userId', user.update);

/* create  one user */
router.put('/', user.create);

module.exports = router;