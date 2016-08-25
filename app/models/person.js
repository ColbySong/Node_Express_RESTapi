"use strict";

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PersonSchema = new Schema({
  name: String
});

module.exports = mongoose.model('Person', PersonSchema);
