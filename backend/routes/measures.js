var express = require('express');
var router = express.Router();
var measure = require('../controleur/measureControleur');

/* GET measures listing. */
router.get('/', measure.findAll);

module.exports = router;