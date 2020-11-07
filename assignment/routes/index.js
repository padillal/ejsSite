var express = require('express');
var router = express.Router();

const content = [
   {
     text: "Hi there!",
     user: "Amando",
     added: new Date()
   },
   {
     text: "Hello World!",
     user: "Charles",
     added: new Date()
   }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { messages: content , title: 'PROJECT HOME PAGE', header: 'CONTENT LIST' });
});

/*GET new page*/
router.get('/new', function(req, res, next) {
  res.render('form');
});

module.exports = router;
