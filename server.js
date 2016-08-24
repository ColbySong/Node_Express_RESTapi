"use strict";

// import appropiate packages
let express =  require('express');
let app =  express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 8080;

// hook up database
mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o');
// routing
let router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'api is working'});
});

app.use('/api', router);

// starting server
app.listen(port);
console.log("server is running on port" + port);
