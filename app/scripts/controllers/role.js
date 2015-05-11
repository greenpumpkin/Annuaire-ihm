'use strict';
/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:RoleCtrl
 * @description
 * # RoleCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
    .controller('RoleCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];


        if($routeParams.roleId) {
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Roles/' + $routeParams.roleId)
                .success(function(data) {
                    if (data.status == "success") {
                        $scope.currentRole = data.data;
                    }
                });
        }

        $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Roles')
            .success(function(data) {
                $scope.roles = data.data;
            });

        $scope.deleteRole = function(id){
            $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + id + '/Roles');
        }

        $scope.addRoles = function(role){
            if($routeParams.roleId) {
                this.editRole(role);
            } else {
                this.addRole(role);
            }
        }

        $scope.addRole = function(role){
            $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Roles/', role);
        }

        $scope.editRole = function(role){
            $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Roles/' + role.id, role);
        }

    }]);