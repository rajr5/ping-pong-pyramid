(function(){
  'use strict';
  
  var _ = require("lodash");
  // var FeatureRequest = require('../models/featureRequest');
  // var Match = require('../models/match');
  // var Player = require('../models/player');
  // var PlayerMatch = require('../models/playerMatch');

  /**
   * 200 - OK success GET
   * 201 - created success POST
   * 203 - created success PUT
   * 204 - no content success DELETE
   * 400 bad request
   * 401 unathorized
   * 403 forbidden
   * 404 not found
   * 405 method not allowed
   */
  /** Helper function to send JSON server response */
  function sendJson(res, status, content, keyName) {
    content = content || {};
    if (keyName) {
      var temp = {};

      temp[keyName] = content;
      content = temp;
    }
        res.status(status);
        res.json(content);
  }


  /** Controllers */
  //////////////////////////////////////////// PLAYER ////////////////////////////////////////////

  module.exports.getPlayers = function(req, res) {

    var excl = excludeIds(req) ? {id: 0, _id: 0} : {};
    Player.find({}, excl, function(err, recordOutput) {
      if (err) {
        sendJson(res, 400, {message: "Error fetching records", error: err});
      } else {
        sendJson(res, 201, recordOutput, 'players');
      }
    });
  };

})();

