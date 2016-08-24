"use strict";

// import appropiate packages
let express =  require('express');
let app =  express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let bear = require('./app/models/bear');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 8080;

// hook up database
mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o');

// routing
let router = express.Router();

// middleware - gets called for all requests
router.use((req,res,next) => {
  console.log("incoming request" + req);
  next(); // pass on request to the routes below
});

router.get('/', (req, res) => {
  res.json({ message: 'api is working'});
});

// all routes will be prefixed with /api
app.use('/api', router);

// starting server
app.listen(port);
console.log("server is running on port" + port);
