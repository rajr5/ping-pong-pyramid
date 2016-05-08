(function() {
    'use strict';

    var core = angular.module('app.core');
    
    // core.config(toastrConfig);

    /* @ngInject */
    // function toastrConfig(toastr) {
    //     toastr.options.timeOut = 4000;
    //     toastr.options.positionClass = 'toast-bottom-right';
    // }

    var config = {
        appErrorPrefix: '[Ping Pong Pyramid] ', //Configure the exceptionHandler decorator
        appTitle: 'Ping Pong Pyramid',
        version: '1.0.0'
    };

    core.value('config', config);

    core.config(configure);
    
    configure.$inject = ['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider'];
    
    /* @ngInject */
    function configure($logProvider, routerHelperProvider, exceptionHandlerProvider) {
        // turn debugging off/on (no info or warn)
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }

        // Configure the common route provider
        // routehelperConfigProvider.config.$routeProvider = $routeProvider;
        // routehelperConfigProvider.config.docTitle = 'Ping Pong Pyramid: ';
        // var resolveAlways = { /* @ngInject */
        //     ready: function(dataservice) {
        //         return dataservice.ready();
        //     }
        //     // ready: ['dataservice', function (dataservice) {
        //     //    return dataservice.ready();
        //     // }]
        // };
        // routehelperConfigProvider.config.resolveAlways = resolveAlways;
        
        // Configure the common exception handler
        exceptionHandlerProvider.configure(config.appErrorPrefix);
        // routerHelperProvider.configure({
        //     docTitle: 'Ping Pong Pyramid: '
        // });

        //  $mdIconProvider
        //   .iconSet('action', '../icons/material-design/action-icons.svg', 24)
        //   .iconSet('alert', '../icons/material-design/alert-icons.svg', 24)
        //   .iconSet('av', '../icons/material-design/av-icons.svg', 24)
        //   .iconSet('communication', '../icons/material-design/communication-icons.svg', 24)
        //   .iconSet('content', '../icons/material-design/content-icons.svg', 24)
        //   .iconSet('device', '../icons/material-design/device-icons.svg', 24)
        //   .iconSet('editor', '../icons/material-design/editor-icons.svg', 24)
        //   .iconSet('file', '../icons/material-design/file-icons.svg', 24)
        //   .iconSet('hardware', '../icons/material-design/hardware-icons.svg', 24)
        //   .iconSet('icons', '../icons/material-design/icons-icons.svg', 24)
        //   .iconSet('image', '../icons/material-design/image-icons.svg', 24)
        //   .iconSet('maps', '../icons/material-design/maps-icons.svg', 24)
        //   .iconSet('navigation', '../icons/material-design/navigation-icons.svg', 24)
        //   .iconSet('notification', '../icons/material-design/notification-icons.svg', 24)
        //   .iconSet('social', '../icons/material-design/social-icons.svg', 24)
        //   .iconSet('toggle', '../icons/material-design/toggle-icons.svg', 24);
    }
})();