var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { 
    title: 'Home Page'
  });
});
/* GET home page. */
router.get('/home', function(req, res)
 {
  res.render('index', { 
    title: 'Home Page'
  });
});
/* GET About me page. */
router.get('/about', function(req, res) {
  res.render('about', { 
    title: 'About Me Page'
  });
});
/* GET Projects page. */
router.get('/projects', function(req, res) {
  res.render('project', { 
    title: 'Projects Page',
  });
});
/* GET Contactus page. */
router.get('/contact', function(req, res) {
  res.render('contact', { 
    title: 'Contact Me Page'
  });
});

module.exports = router;