var express = require("express");
var Films = require('../src/models/films.js')
var Film = require('../src/models/film.js')

var router = new express.Router();

var films = Films();

//films index
router.get('/', function(req, res){
  res.json(films);
});

//get film by ID
router.get('/:id', function(req, res){
  var index = req.params.id;
  res.json(films[index]);
});

//post new film
router.post('/', function(req, res){
  var film = new Film({title:
    req.body.title,
    actors: req.body.actors
  });
  films.push(films);
  res.json(films);
});

//update a film 
router.put('/:id', function(req, res){
  films[req.params.id] = req.body.film; 
  res.json(films);
});

//delete a cat 
router.delete("/:id", function(req, res){
  films.splice(req.params.id, 1);
  res.json(films);
});

module.exports = router;