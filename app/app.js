'use strict';

// Declare app level module which depends on views, and components
angular.module('angular-filterbox', [
    'ngRoute'
]).config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'tpl/demo.html',
            controller: 'DemoCtrl'
        })
        .otherwise({redirectTo: '/controller'});
}]);
