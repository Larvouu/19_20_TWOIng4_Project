var express = require('express');
var router = express.Router();
var user = require('../controleur/userControleur');

/* GET users listing. */
router.get('/', user.findAll);

/** GET users par houseSize */
router.get('/houseSize/:houseSize', user.findAllByHouseSize);

module.exports = router;
