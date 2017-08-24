'use strict';

/**
 * @ngdoc function
 * @name app.config:uiRouter
 * @description
 * # Config
 * Config for the router
 */
angular.module('app')
  .run(
    [           '$rootScope', '$state', '$stateParams',
      function ( $rootScope,   $state,   $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;        
      }
    ]
  )
  .config(
    [          '$stateProvider', '$urlRouterProvider',
      function ( $stateProvider,   $urlRouterProvider) 
      {
        var layout = 'views/layout.html';
        var aside  = 'views/aside.html';
        var content= 'views/content.html';
        
        $urlRouterProvider
          .otherwise('/app/home');
        $stateProvider
          .state('app', {
            abstract: true,
            url: '/app',
            views: {
              '': {
                templateUrl: layout
              },
              'aside': {
                templateUrl: aside
              },
              'content': {
                templateUrl: content
              }
            }
          })
          .state('app.dashboard', {
            url: '/home',
            templateUrl: 'views/dashboard.html',
            resolve: {
              auth : function(authFactory)
              {
                return authFactory.proccessNoAuth();
              },
              load: function($ocLazyLoad) {
                return $ocLazyLoad.load({
                  name: "app",
                  files: [
                    'scripts/factories/evaluation.js',
                    'scripts/controllers/dashboard.js'
                    ]
                  });
                }
              }
          });
      }
    ]
  );