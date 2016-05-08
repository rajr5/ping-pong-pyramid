(function() {
'use strict';

  angular
    .module('app.pyramid')
    .controller('PyramidController', PyramidController);

  PyramidController.$inject = ['logger'];
  function PyramidController(logger) {
    var vm = this;
    vm.playerDropCheck = playerDropCheck;
    vm.playerDropped = playerDropped;
    vm.playerMoved = playerMoved;
    vm.clearAllCss = clearAllCss;
    activate();

    ////////////////

  function activate() {
    vm.tiers = getTiers();
    logger.info('tiers', vm.tiers);
  }
  
  function playerDropCheck(event, index, type, tier) {
    // logger.info('playerDropCheck()');
    // logger.info('event', event);
    // logger.info('index', index);
    // logger.info('type', type);
    // logger.info('tier', tier);
    
    // index = index in player list
    // type = type 
    logger.info('tier.allowedDrag.indexOf(type)', tier.allowedDrag.indexOf(type));
    if (index === (tier.players.length)) {
        clearAllCss();
        return false;
    }
    if (tier.allowedDrag.indexOf(type) >= 0) {
      // set CSS for all player objects
      setCss(tier.players, index);
      return true;
    } else {
      // set CSS for all player objects
      clearAllCss();
      return false;
    }
  }
  

  
  function playerDropped(event, index, player, type, tier) {
    logger.info('playerDropped()');
    logger.info('event', event);
    logger.info('index', index);
    logger.info('player', player);
    logger.info('type', type);
    logger.info('tier', tier);
    clearAllCss();
    
    // on drop:
    // copy player being replaced
    var replacedPlayer = {};
    angular.copy(tier.players[index],replacedPlayer);
    // Save existing player tier/position
    var existingPlayerTier = player.tier;
    var existingPlayerPosition = player.position;
    // swap tier and posistion between players
    player.tier = replacedPlayer.tier;
    player.position = replacedPlayer.position;
    
    replacedPlayer.tier = existingPlayerTier;
    replacedPlayer.position = existingPlayerPosition;
    
    // swap player positions
    tier.players[index] = player;
    logger.info('replacedPlayer.tier', replacedPlayer.tier);
    logger.info('replacedPlayer.position', replacedPlayer.position);
    
    vm.tiers[replacedPlayer.tier].players[replacedPlayer.position] = replacedPlayer;

    logger.info('replacedPlayer', replacedPlayer);
    logger.info('player', player);
    logger.info('tier', tier);
    logger.info('vm.tiers', vm.tiers);
    return true;
  }
  
  function playerMoved(ev, index, player, tier) {
    logger.info('playerMoved()');
    logger.info('ev', ev);
    logger.info('index', index);
    logger.info('player', player);
    logger.info('tier', tier);

    
  }

  function clearAllCss() {
    vm.tiers.forEach(function(element) {
      logger.info('element', element);
      setCss(element.players, -1);
    }, this);
  }

  function setCss(players, index) {
    players.map(function(obj, idx, arr) {
      if(idx === index) {
        obj.class = 'label label-danger';
      } else {
        obj.class = 'label label-default';
      }
    });
  }

  function getTiers() {
    return [
      {
        label: "tier 0",
        allowedDrag: ['1'],
        tier: '0',
        order: 0,
        max: 1,
        offset: '40',
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
      {
        label: "tier 1",
        allowedDrag: ['0','2'],
        tier: '1',
        order: 1,
        max: 2,
        offset: '30',
        players: [
          {
            id: '234243765',
            name: 'p0',
            screenName: 'p0',
            tier: 1,
            position: 0,
            class: 'label label-default'
          },
          {
            id: '234243',
            name: 'p00',
            screenName: 'p00',
            tier: 1,
            position: 1,
            class: 'label label-default'
          }
        ]
      },
      {
      label: "tier 2",
      allowedDrag: ['1','3'],
      tier: '2',
      order: 2,
      max: 4,
      offset: '20',
      players: [
          {
            id: '1',
            name: 'p11',
            screenName: 'p1',
            tier: 2,
            position: 0,
            class: 'label label-default'
          },
          {
            id: '2',
            name: 'p21',
            screenName: 'p2',
            tier: 2,
            position: 1,
            class: 'label label-default'
          },
          {
            id: '3',
            name: 'p31',
            screenName: 'p3',
            tier: 2,
            position: 2,
            class: 'label label-default'
          },
          {
            id: '4',
            name: 'p41',
            screenName: 'p4',
            tier: 2,
            position: 3,
            class: 'label label-default'
          }
        ]
      }
    ]
  }
        
        
  }
})();