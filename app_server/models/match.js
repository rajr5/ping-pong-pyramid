(function(){
  'use strict';

  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var matchSchema = new Schema({
    id: { type: String },
    winner: { type: ObjectId },
    loser: { type: ObjectId },
    winnerNewLocation: { type: String },
    winnerPriorLocation: { type: String },
    loserPriorLocation: { type: String },
    loserNewLocation: { type: String },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
  });

  module.exports = mongoose.model('Match', matchSchema);

})();
