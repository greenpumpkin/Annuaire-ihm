'use strict';

/**
 * @ngdoc overview
 * @name pooIhmExemplesApp
 * @description
 * # pooIhmExemplesApp
 *
 * Main module of the application.
 */
angular
  .module('pooIhmExemplesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/users' , {
        templateUrl: 'views/Users/list.html',
        controller: 'UsersCtrl'
      })
      .when('/users/:userId', {
        templateUrl: 'views/Users/show.html',
        controller: 'UsersCtrl'
      })
        .when('/add', {
            templateUrl: 'views/Users/add.html',
            controller: 'AddCtrl'
        })
        .when('/:userId/edit', {
            templateUrl: 'views/Users/edit.html',
            controller: 'EditCtrl'
        })
        .when('/:userId/delete', {
            templateUrl: 'views/Users/delete.html',
            controller: 'DeleteCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
