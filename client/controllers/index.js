var express = require("express");
var router = new express.Router(); 
var path = require('path');

router.use("/api/films", require("./films_controller.js"));

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname + './index.html'));
});

module.exports = router;