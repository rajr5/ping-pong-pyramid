(function(){
  'use strict';

  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var playerSchema = new Schema({
    id: { type: String },
    name: { type: String },
    password: {Type: String },
    email: { type: String },
    screenName: { type: Boolean },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
  });

  module.exports = mongoose.model('Player', playerSchema);

})();
