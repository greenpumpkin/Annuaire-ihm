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
        controller: 'MainCtrl'
      })
      .when('/users/:userId', {
        templateUrl: 'views/Users/show.html',
        controller: 'UserShowCtrl'
      })
      .when('/add', {
         templateUrl: 'views/Users/add.html',
         controller: 'UserAddCtrl'
        })
      .when('/edit', {
         templateUrl: 'views/Users/edit.html',
         controller: 'UserEditCtrl'
        })
      .when('/edit/:userId', {
         templateUrl: 'views/Users/edit.html',
         controller: 'UserEditCtrl'
        })
      .when('/projects' , {
         templateUrl: 'views/Projects/list_projects.html',
         controller: 'MainProjCtrl'
        })
      .when('/projects/:projectId', {
         templateUrl: 'views/Projects/show_project.html',
         controller: 'ShowProjCtrl'
        })
      .when('/add_project', {
         templateUrl: 'views/Projects/add_project.html',
         controller: 'AddProjCtrl'
        })
        .when('/edit_project', {
        templateUrl: 'views/Projects/edit_project.html',
        controller: 'EditProjCtrl'
      })
        .when('/edit_project/:projectId', {
          templateUrl: 'views/Projects/edit_project.html',
          controller: 'EditProjCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
