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
    
    vm.playerMovesHistory = [];
    
    activate();

    ////////////////

  function activate() {
    vm.tiers = getTiers();
    setPlayerTierAndPosition(vm.tiers);
    logger.info('tiers', vm.tiers);
  }
  
  // Determine if player can be dropped into dragged location
  function playerDropCheck(event, index, type, tier) {
   
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
  
  // Swap players once player has been dropped
  function playerDropped(event, index, player, type, tier) {

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
    
    vm.tiers[replacedPlayer.tier].players[replacedPlayer.position] = replacedPlayer;
    // Log player move
    savePlayerMoveHistory(replacedPlayer, player);
    savePlayerMoveHistory(player, replacedPlayer);
    
    return true;
  }
  
  // Method callde once player has been moved
  function playerMoved(ev, index, player, tier) {

  }
  
  // Log that a player has been moved
  function savePlayerMoveHistory(movedPlayer, replacedPlayer) {
    var p = {};
    p.player = movedPlayer;
    p.replacedPlayer = replacedPlayer;
    p.newTier = movedPlayer.tier;
    p.oldTier = replacedPlayer.tier;
    p.newPosition = movedPlayer.position;
    p.oldPosition = replacedPlayer.position;
    
    vm.playerMovesHistory.unshift(p);
  }

  // Set all CSS classes back to default
  function clearAllCss() {
    vm.tiers.forEach(function(element) {
      setCss(element.players, -1);
    }, this);
  }

  // Helper function to set CSS class when item is being dragged
  function setCss(players, index) {
    players.map(function(obj, idx, arr) {
      if(idx === index) {
        obj.class = 'label label-danger';
      } else {
        obj.class = 'label label-default';
      }
    });
  }
  
  // Helper function to set tier and position on all players
  function setPlayerTierAndPosition(tiers) {
  //   for (var i = 0; i < tiers.length; i++) {
  //     var t = tiers[i];

  //     var offset;
  //     var max;
  //     var allowedDrag = [];
  //     if (i = 0) {
  //       offset = 5;
  //       max = 1;
  //       allowedDrag.push('1');
  //     }else if (i = 1) {
  //       offset = 4;
  //       max = 2;
  //       allowedDrag.push(['0','2']);
  //     }else if (i = 2) {
  //       offset = 3;
  //       max = 4;
  //       allowedDrag.push(['1', '3']);
  //     } else {
  //       offset = 2;
  //       max = 100;
  //       allowedDrag.push('2');
  //     }
      
  //     t.label = 'Tier ' + i;
  //     t.allowedDrag = allowedDrag;
  //     t.tier = i.toString();
  //     t.order = i;
  //     t.max = max;
  //     t.offset = offset;
  //     for (var k = 0; k < t.players.length; k++) {
  //       var p = t.players[k];
  //       p.tier = i;
  //       p.position = k;
  //       p.class = 'label label-default';
  //     }
  //   }
  }

  function getTiers() {
    return [
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
      {
        label: "tier 1",
        allowedDrag: ['0','2'],
        tier: '1',
        order: 1,
        max: 2,
        offset: 4,
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
      offset: 3,
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
      },
            {
      label: "tier 3",
      allowedDrag: ['2'],
      tier: '3',
      order: 3,
      max: 8,
      offset: 2,
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
          },
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
          },
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