'use strict';

/**
 * @ngdoc function
 * @name app.controller:AppCtrl
 * @description
 * # MainCtrl
 * Controller of the app
 */
angular.module('app')
    .controller('AppCtrl', ['$scope',
        function (           $scope) {
            $scope.title = "Resemin - App";
        }
    ]);
