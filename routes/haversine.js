var express = require('express');
var router = express.Router();

var answer = "100";

router.get('/', function(req, res, next) {
  res.send(answer)
});

router.post('/calculate', function(req, res)  {
    const coordinates = body.coordinates
    console.log("haversine express works: ", coordinates)
})


//there is a haversine calculator installed to this project from:
// https://www.npmjs.com/package/haversine
// This section is still under process so it doesn't yet calculate the users input yet
// also calculator was supposed to be moved to its own component
const haversine = require('haversine')

const start = {
  latitude: 30.849635,
  longitude: -83.24559
}

const end = {
  latitude: 27.950575,
  longitude: -82.457178
}

console.log("start, end in km: " + haversine(start, end))

console.log("start,end unit: meter " + haversine(start, end, {unit: 'meter'}))

console.log(haversine(start, end, {threshold: 1}))
console.log(haversine("threshold: 1, unit: 'meter " + start, end, {threshold: 1, unit: 'meter'}))



module.exports = router;
