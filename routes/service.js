var express = require('express');
var router = express.Router();
const request = require('request');

let ports={
  "bikes":3031,
  "food":3032,
  "toys":3033
}

/* GET users listing. */
router.get('/:servicename/all/:location?', function (req, res1, next) {
  let location = req.params.location;
  let servicename = req.params.servicename;
  if (location === undefined)
    location = '';
  request(`http://localhost:${ports[servicename]}/${servicename}/all/${location}`, { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body);
    res1.json(body);
  });
});
router.get('/:servicename/team', function (req, res1, next) {

  let servicename = req.params.servicename;
  
  request(`http://localhost:${ports[servicename]}/${servicename}/team`, { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body);
    res1.json(body);
  });
});

module.exports = router;
