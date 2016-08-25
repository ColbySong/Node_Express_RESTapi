"use strict";

// import appropiate packages
let express =  require('express');
let app =  express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let Person = require('./app/models/person');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 8080;

// hook up database
mongoose.connect('mongodb://localhost:27017/testDB');

// routing
let router = express.Router();

// middleware - gets called for all requests
router.use((req,res,next) => {
  console.log(req.method);
  console.log(req.headers);
  console.log(req.body);
  next(); // pass on request to the routes below
});

router.get('/', (req, res) => {
  res.json({ message: 'api is working'});
});

// ---------------------------------------------------------------------------
// API ROUTES
// POST route for creating a person
router.route('/people').post((req, res) => {
  console.log("inside POST for creating a person");
  let person = new Person();
  person.name = req.body.name;
  console.log(person.name);

  person.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'person created'});
    }
  });
});

router.route('/people').get((req, res) => {
  Person.find((err, people) => {
    if (err) {
      res.send(err);
    } else {
      res.json(people);
    }
  });
});

// GET route for retrieving people


// ---------------------------------------------------------------------------


// all routes will be prefixed with /api
app.use('/api', router);

// starting server
app.listen(port);
console.log("server is running on port" + port);
