"use strict";

let mongoose = require('mongoose');
let schema = mongoose.Schema;

let bearSchema = new Schema({
  name: string;
});

module.exports = mongoose.model('Bear', BearSchema);
