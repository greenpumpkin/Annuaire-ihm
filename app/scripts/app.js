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
         controller: 'UsersCtrl'
        })
      .when('/edit', {
         templateUrl: 'views/Users/edit.html',
         controller: 'UsersCtrl'
        })
      .when('/edit/:userId', {
         templateUrl: 'views/Users/edit.html',
         controller: 'UsersCtrl'
        })
      .when('/projects' , {
         templateUrl: 'views/Projects/list_projects.html',
         controller: 'ProjCtrl'
        })
      .when('/projects/:projectId', {
         templateUrl: 'views/Projects/show_project.html',
         controller: 'ProjCtrl'
        })
      .when('/add_project', {
         templateUrl: 'views/Projects/add_project.html',
         controller: 'ProjCtrl'
        })
        .when('/edit_project', {
        templateUrl: 'views/Projects/edit_project.html',
        controller: 'ProjCtrl'
      })
        .when('/edit_project/:projectId', {
          templateUrl: 'views/Projects/edit_project.html',
          controller: 'ProjCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
