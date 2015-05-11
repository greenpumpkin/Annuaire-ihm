'use strict';
/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
    .controller('UsersCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];


        if($routeParams.userId) {
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId)
                .success(function(data) {
                    if (data.status == "success") {
                        $scope.currentUser = data.data;
                    }
                });

            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId + '/Roles')
                .success(function(data) {
                    $scope.roles = data.data;
                });
        }

        $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
            .success(function(data) {
                $scope.users = data.data;
            });

        $scope.delete = function(id){
            $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + id);
        }

        $scope.add = function(user){
            if($routeParams.userId) {
                this.editUser(user);
            } else {
                this.addUser(user);
            }
        }

        $scope.addUser = function(user){
            $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Users/', user);
        }

        $scope.editUser = function(user){
            $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + user.id, user);
        }

    }]);