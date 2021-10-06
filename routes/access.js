var express = require('express');
const url = require("url");
var router = express.Router();

/* GET forbidden listing. */
router.get('/forbidden', function(req, res, next) {
  if (!checkAccess(req)) {
    // res.status(403).send("Access denied")
    res.status(403).render('error', { message: 'Access denied', error: { status: 403} });
  } else {
    // res.send('Access approved')
    res.render('index', { title: 'Access approved'});
  }
});

module.exports = router;


function checkAccess(req) {
  return url.parse(req.url, true).query.secret === 'true'
}