var express = require('express');
var router = express.Router();

const messagesArr = [
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
  res.render('index', { title: "Mini Messageboard", messages: messagesArr });
});

router.get('/new', function(req, res, next) {
  res.render('form');
})

router.post('/new', function(req, res, next) {
  messagesArr.push({text: req.body.inputMessage, user: req.body.userName, added: new Date()});
  res.redirect('/');
  res.sendStatus(200);
});

module.exports = router;


/*
  <form method="POST" action="/new">
   put your inputs and buttons in here!
</form>
*/