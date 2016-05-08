(function() {
    'use strict';
    
    angular
        .module('app.pyramid')
        .run(appRun);

    appRun.$inject = ['routerHelper']

    /* @ngInject */
    function appRun(routerHelper) {
        console.log('routerHelper', routerHelper);
        routerHelper.configureStates(getStates());
        console.log('routerHelper', routerHelper);
    }

    function getStates() {
        return [
            {
                state: 'pyramid',
                config: {
                    url: '/pyramid',
                    templateUrl: 'pyramid/pyramid.html',
                    controller: 'PyramidController',
                    controllerAs: 'vm'
                }
            }
        ];
    }
})();