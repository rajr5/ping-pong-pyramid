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


      {
        label: "tier 0",
        allowedDrag: ['1'],
        tier: '0',
        order: 0,
        max: 1,
        offset: 5,
        players: [
          {
            id: '43432243',
            name: 'Austin Turner',
            screenName: 'Turnerator',
            tier: 0,
            position: 0,
            class: 'label label-default'
          }
        ]
      },