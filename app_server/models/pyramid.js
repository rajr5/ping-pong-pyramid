(function(){
  'use strict';

  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var pyramidSchema = new Schema({
    id: { type: String },
    pyramid: { type: Mixed },
    currentState: { type: Boolean }, 
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
  });

  module.exports = mongoose.model('Pyramid', pyramidSchema);

})();
