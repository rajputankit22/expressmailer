var express = require('express');
var router = express.Router();
var expressMail = require('express-mail');
var mailer = require('express-mailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('hello');
});

router.post('/a', function (req, res, next) {
  var email = req.body.mail;
  var name = req.body.name;
  var subject1 = req.body.subject;
  var msg = req.body.msg;
  console.log(email);
  res.mailer.send(
'abc',
  {
    to: email,
    subject: subject1,
    content: msg
  },
  function (err, msg) {
    console.log(err , msg);
    if (err) {
      // handle error
      console.log(err);
    }
      // mail sent!
      res.send('ok');
  }
);
});

module.exports = router;
