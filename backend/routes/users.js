var express = require('express');
var router = express.Router();
var user = require('../controleur/userControleur');

/* GET users listing. */
router.get('/', user.findAll);

module.exports = router;
