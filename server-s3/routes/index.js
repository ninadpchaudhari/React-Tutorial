var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

var movieRepo = require("../repository/emailRepository")

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/hello', (req, res) => {
  res.json({ "Greeting": "Hello " + req.body.name });
});

router.get('/add/:firstNumber/and/:secondNumber', (req, res) => {
  console.log(req.params.firstNumber + req.params.secondNumber);
  let firstNo = parseInt(req.params.firstNumber),
    secondNo = parseInt(req.params.secondNumber);
  res.json({ "Addition": firstNo + secondNo });
});

router.post('/save', (req, res) => {
  //Fetch required variables from the request.
  let name = req.body.name;
  let desc = req.body.desc;

  // Business Logic with the vars.
  console.log(name);
  console.log(desc);

  //Save it to the DB
  MongoClient.connect('mongodb://localhost:27017/animals', function (err, client) {
    if (err){
      res.json({ 'Status': 'Error' });
    res.end();
    throw err
    } 

    var db = client.db('myApp');
    db.collection('myApp').insert({ 'name': name, 'desc': desc });
    //Give the client a response.
    res.json({ 'Status': 'saved' });
    res.end();
  })

});

router.post('/saveMovie', (req,res)=>{
  //Fetch required variables from the request.
  let movieName = req.body.movieName;
  let isFav = req.body.isFav;

  movieRepo.create(movieName, isFav,()=>{
    res.json({"ststus" : "saved"});
    res.end();
  })
})

router.get("/aMovie", (req,res)=>{
  movieRepo.findOneByName("abc", (aMovie) => {
    res.json(aMovie);
    res.end();
  })
});

module.exports = router;
