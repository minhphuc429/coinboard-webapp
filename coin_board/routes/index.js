var express = require('express');
var router = express.Router();
var param = require('../params/index_param');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', param);
});

module.exports = router;
