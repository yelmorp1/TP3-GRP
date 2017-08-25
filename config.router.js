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
          .state('app.home', {
            url: '/home',
            templateUrl: 'views/home.html',
            resolve: {
              load: function($ocLazyLoad) {
                return $ocLazyLoad.load({
                  name: "app",
                  files: [
                    'styles/flexslider.css',
                    'libs/jquery/jquery.flexslider.js',
                    'controllers/home.js'
                    ]
                  });
                }
              }
          })
          .state('app.producto',{
            url: '/producto',
            templateUrl: 'views/producto/index.html',
            resolve: {
              load: function($ocLazyLoad){
                return $ocLazyLoad.load({
                  name: "app",
                  files: [
                    'factories/producto.js',
                    'controllers/producto/index.js'
                  ]
                });
              }
            }
          })
          .state('app.crearProducto',{
            url: '/producto/nuevo',
            templateUrl: 'views/producto/create.html',
            resolve: {
              load: function($ocLazyLoad){
                return $ocLazyLoad.load({
                  name: "app",
                  files: [
                    'controllers/producto/create.js'
                  ]
                });
              }
            }
          })
          .state('app.editarProducto',{
            url: '/producto/{id:[0-9]{1,4}}',
            templateUrl: 'views/producto/editar.html',
            resolve: {
              load: function($ocLazyLoad){
                return $ocLazyLoad.load({
                  name: "app",
                  files: [
                    'factories/producto.js',
                    'controllers/producto/edit.js'
                  ]
                });
              }
            }
          });
      }
    ]
  );