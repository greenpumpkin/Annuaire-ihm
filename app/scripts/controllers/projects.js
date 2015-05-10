'use strict';
/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:ProjCtrl
 * @description
 * # ProjCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
    .controller('ProjCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];


        if($routeParams.projectId) {
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + $routeParams.projectId)
                .success(function(data) {
                    if (data.status == "success") {
                        $scope.currentProject = data.data;
                    }
                });
        }

        $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects')
            .success(function(data) {
                $scope.projects = data.data;
            });

        $scope.deleteProj = function(id){
            $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + id);
        }

        $scope.addProject = function(project){
            if($routeParams.projectId) {
                this.editProj(project);
            } else {
                this.addProj(project);
            }
        }

        $scope.addProj = function(project){
            $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/', project);
        }

        $scope.editProj = function(project){
            $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + project.id, project);
        }

    }]);