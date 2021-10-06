var express = require('express');
var router = express.Router();

/* GET home listing. */
router.get('/home', function(req, res, next) {
  // res.end('Home');
  res.render('index', { title: 'Home'});
});

module.exports = router;
