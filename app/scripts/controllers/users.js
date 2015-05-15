'use strict';
/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')

/**
 * MainCtrl
 * Controleur pour la page d'accueil.
 */
    .controller('MainCtrl', ['$scope', '$http', 'Users', function ($scope, $http, Users) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.getAll = function() {
            Users.getAll(
                function(data) {
                    $scope.users = data;
                },
                function(data) {
                    $scope.error = data;
                });
        }

        $scope.delete = function (userId) {
            Users.delete(userId, function(data){
                $scope.getAll();
            }, function (data) {
                $scope.error = data;
            });
        };

        $scope.getAll();
    }])

/**
 * UserAddCtrl
 * Controleur pour ajouter un utilisateur.
 */
    .controller('UserAddCtrl', ['$scope', '$http', '$location', 'Users', function ($scope, $http, $location, Users) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.addInfo = function() {
            Users.add($scope.user,
                function(data) {
                    $location.path('/users/'+ data.id);
                },
                function() {
                    $scope.error = data;
                });
        };
    }])

/**
 * UserEditCtrl
 * Controleur pour éditer la fiche d'un utilisateur.
 */
    .controller('UserEditCtrl', ['$scope', '$http', '$routeParams', '$location', 'Users', function ($scope, $http, $routeParams, $location, Users) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        if ($routeParams.userId) {
            Users.get($routeParams.userId,
                function(data) {
                    $scope.user = data;
                },
                function(data) {
                    $scope.error = data;
                });
        }

        $scope.addInfo = function() {
            Users.edit($scope.user,
                function(data) {
                    $location.path('/users/'+ data.id);
                },
                function(data) {
                    $scope.error = data;
                });
        };
    }])

/**
 * UserShowCtrl
 * Controleur pour montrer la fiche d'un utilisateur.
 */
    .controller('UserShowCtrl', ['$scope', '$http', '$routeParams', 'Users', function ($scope, $http, $routeParams, Users) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];


        if ($routeParams.userId) {

            Users.get($routeParams.userId,
                function (data) {

                    $scope.user = data;
                    var projectData = new Array();
                    Users.getProject($routeParams.userId,
                        function (data) {

                            projectData = data;
                            var roleData = new Array();
                            Users.getUserRole($routeParams.userId,
                                function(data){

                                    roleData = data;
                                    for(var m = 0 ; m < roleData.length ; ++m){
                                        for(var n = 0 ; n < projectData.length ; ++n) {

                                            if(roleData[m].ProjectId === projectData[n].id){
                                                roleData[m].description = projectData[n].description;
                                                roleData[m].title = projectData[n].title;
                                                break;

                                            }
                                        }
                                    }

                                    $scope.projects = roleData;
                                }, function (data) {

                                    $scope.error = data;

                                })

                        }, function (data) {

                            $scope.error = data;

                        })
                },

                function (data) {

                    $scope.error = data;

                });
        }

    }]);