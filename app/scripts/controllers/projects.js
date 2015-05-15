'use strict';
/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the pooIhmExemplesApp
 */

/**
 * MainProjCtrl
 * Controleur pour voir la liste de projets.
 */
angular.module('pooIhmExemplesApp')
    .controller('MainProjCtrl', ['$scope', '$http', 'Projects', function ($scope, $http, Projects) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.getAll = function() {
            Projects.getAll(
                function(data) {
                    $scope.projects = data;
                },
                function(data) {
                    $scope.error = data;
                }
            );
        }

        $scope.delete = function (projectId) {
            Projects.delete(projectId, function(data){
                $scope.getAll();
            }, function (data) {
                $scope.error = data;
            });
        };

        $scope.getAll();
    }])

/**
 * AddProjCtrl
 * Controleur pour ajouter un projet.
 */
    .controller('AddProjCtrl', ['$scope', '$http', '$location', 'Projects', function ($scope, $http, $location, Projects) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.addData = function () {
            Projects.add($scope.project,
                function (data) {
                    $location.path('/projects/' + data.id);
                }, function (data) {
                    $scope.error = data;
                });
        }
    }])

/**
 * EditProjCtrl
 * Controleur pour éditer un projet.
 */
    .controller('EditProjCtrl',['$scope', '$http', '$location', '$routeParams', 'Projects', function ($scope, $http, $location, $routeParams, Projects) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        if ($routeParams.projectId) {
            Projects.get($routeParams.projectId,
                function(data) {
                    $scope.edit = true;
                    $scope.project = data;
                },
                function(data) {
                    $scope.error = data;
                });
        }

        $scope.addData = function () {
            Projects.edit($scope.project,
                function (data) {
                    $location.path('/projects/' + data.id);
                }, function (data) {
                    $scope.error = data;
                });
        }
    }])

/**
 * ShowProjCtrl
 * Controleur pour montrer la fiche d'un projet.
 */
    .controller('ShowProjCtrl', ['$scope', '$http', '$routeParams', 'Users', 'Projects', function ($scope, $http, $routeParams, Users, Projects) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        if ($routeParams.projectId) {

            $scope.users = new Array();
            Projects.get($routeParams.projectId,
                function (data) {

                    $scope.project = data;
                    Projects.getUsers($routeParams.projectId,
                        function (userInfos) {

                            var array = new Array();

                            Projects.getRoles($routeParams.projectId,
                                function (userRole) {

                                    for(var m = 0 ; m < userRole.length; ++m){
                                        for(var n = 0 ; n < userInfos.length; ++n){

                                            if(userRole[m].UserId === userInfos[n].id){

                                                var features = {

                                                    surname: userInfos[n].surname,
                                                    name: userInfos[n].name,
                                                    role: userRole[m].name

                                                }

                                                array.push(features);
                                                break;
                                            }
                                        }
                                    }

                                    $scope.users = array;

                                }, function (data) {

                                    $scope.error = data;

                                });
                        },

                        function (data) {

                            $scope.error = data;

                        });

                },

                function (data) {

                    $scope.error = data;

                });
        }
    }]);