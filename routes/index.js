var express = require('express');
var router = express.Router();
var routers = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    phrase: "tacocat"
  });
});

routers.get('/', function(req, res, next) {
  res.render('index', {
    phrase2: "tacocat"
  });
});


function checkPalindrome(phrase){
  let temp = phrase.trim();
  temp = temp.split();
  temp = temp.reverse();
  temp = temp.join("")
  if (phrase.toLowerCase().replace("", "") === temp.toLowerCase().replace("", "") ){
    return true
  }
  return false
}

function checkPalindromes(phrase2){
  let temps = phrase2.trim();
  temps = temps.split();
  temps = temps.reverse();
  temps = temps.join("")
  if (phrase2.toLowerCase().replace("", "") === temps.toLowerCase().replace("", "") ){
    return true
  }
    return false
}

function getResultDescription (phrase){
  if (checkPalindrome(phrase)) {
    return `${phrase} is a palindrome.`
  }
  return `${phrase} is not a palindrome.`
}

function getResultDescription2 (phrase2){
  if (checkPalindromes(phrase2)) {
    return `${phrase2} is a palindrome.`
  }
  return `${phrase2} is not a palindrome.`
}


router.post( '/', function(req, res){
  res.render('index', {
    phrase: req.body.userText,
    message: getResultDescription(req.body.userText)
  })
})

routers.post( '/', function(req, res){
  res.render('index', {
    phrase2: req.body.userText2,
    message2: getResultDescription2(req.body.userText2)
  })
})

module.exports = router;
module.exports = routers;

