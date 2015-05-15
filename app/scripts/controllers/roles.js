'use strict';
/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:RolesCtrl
 * @description
 * # RolesCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')

/**
 * RoleAddCtrl
 * Controleur pour la affecter un role.
 */

    .controller('RoleAddCtrl', ['$scope', '$http', '$routeParams', '$location', 'Roles', 'Projects', 'Users', function ($scope, $http, $routeParams, $location, Roles, Projects, Users) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        Users.getAll(function (data) {
            $scope.users = data;
        }, function (data) {
            $scope.error = data;
        });

        Projects.getAll(function (data) {
            $scope.projects = data;
        }, function (data) {
            $scope.error = data;
        });

        $scope.addInfo = function() {

            $scope.role.UserId = $scope.currentUser.id;
            $scope.role.ProjectId = $scope.currentProject.id;
            $location.path('/users/' + $scope.role.UserId );
            Roles.add($scope.role, function(data){

                $scope.result = data;

            }, function (data) {
                $scope.error = data;
            });
        }
    }]);