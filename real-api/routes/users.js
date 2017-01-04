var express = require('express');
var router = express.Router();

//if this was for real for real, data would come from the database
const customers = [
        {
            "id" : 1,
            "firstName" : "Jared",
            "lastName" : "Blitzstein",
            "address1" : "935 First Ave",
            "city" : "King Of Prussia",
            "zipcode" : "19406",
        },
        {
            "id" : 2,
            "firstName" : "Justin",
            "lastName" : "Szczurowski",
            "address1" : "935 First Ave",
            "city" : "King Of Prussia",
            "zipcode" : "19406",
        }
    ]


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(customers);
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;

  // some logic to get the person
  var person = customers[id - 1];
  if ((person.lastName.match(/z/g) || []).length > 1) {
    person.hasTooManyZs = true;
  } else {
    person.hasTooManyZs = false;
  }

  res.json(person);


});

module.exports = router;
