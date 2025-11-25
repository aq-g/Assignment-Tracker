var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home Page' 
  });
});

/* GET Assignments page. */
router.get('/assignments', function(req, res, next) {
  res.render('index', { 
    title: 'Assignments Catalog' 
  });
});

/* GET Add page. */
router.get('/add', function(req, res, next) {
  res.render('index', { 
    title: 'Add Assignment' 
  });
});

/* GET Edit page. */
router.get('/edit', function(req, res, next) {
  res.render('index', { 
    title: 'Edit Assignment' 
  });
});

module.exports = router;
