'use strict';
/**
 * @ngdoc function
 * @name pooIhmExemplesApp.service:Projects
 * @description
 * # Projects
 * Service of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
    .service('Projects', ['$http', function Projects($http) {

        /** Tout récupérer */
        this.getAll = function (successCB, errorCB) {
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/')
                .success(function (data) {
                    if (data.status === 'success') {
                        successCB(data.data);
                    } else {
                        errorCB(data.data);
                    }
                });
        };

        /** Récupérer un projet grace à l'id */
        this.get = function (projectId, successCB, errorCB) {
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + projectId)
                .success(function (data) {
                    if (data.status === 'success') {
                        successCB(data.data);
                    } else {
                        errorCB(data.data);
                    }
                });
        }

        /** Ajouter un projet */
        this.add = function(project, successCB, errorCB) {
            $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/', project)
                .success(function(data) {
                    if (data.status === 'success') {
                        successCB(data.data);
                    } else {
                        errorCB(data.data);
                    }
                });
        }

        /** Éditer un projet. */
        this.edit = function(project, successCB, errorCB) {
            $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/'+ project.id, project)
                .success(function(data) {
                    if (data.status === 'success') {
                        successCB(data.data);
                    } else {
                        errorCB(data.data);
                    }
                });
        }

        /** Effacer un projet. */
        this.delete = function(projectId, successCB, errorCB) {
            $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/'+ projectId)
                .success(function(data) {
                    if (data.status === 'success') {
                        successCB(data.data);
                    } else {
                        errorCB(data.data);
                    }
                });
        }

        /** Récupérer les utilisateurs grace à l'id du projet.*/
        this.getUsers = function (projectId, successCB, errorCB) {
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + projectId + '/Users/')
                .success(function (data) {
                    if (data.status === 'success') {
                        successCB(data.data);
                    } else {
                        errorCB(data.data);
                    }
                });
        }

        /** Récupérer les roles grace à l'id du projet */
        this.getRoles = function (projectId, successCB, errorCB) {
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + projectId + '/Roles/')
                .success(function (data) {
                    if (data.status === 'success') {
                        successCB(data.data);
                    } else {
                        errorCB(data.data);
                    }
                });
        }

    }]);