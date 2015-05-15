'use strict';
/**
 * @ngdoc function
 * @name pooIhmExemplesApp.service:Roles
 * @description
 * # Roles
 * Service of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
    .service('Roles', ['$http', function Roles($http) {

        /** Récupérer un role à partir de son identifiant */
        this.get = function (roleId, successCB, errorCB) {
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Roles/' + roleId)
                .success(function (data) {
                    if (data.status === 'success') {
                        successCB(data.data);
                    } else {
                        errorCB(data.data);
                    }
                });
        }

        /** Ajouter simplement un role */
        this.add = function(role, successCB, errorCB) {
            $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Roles/', role)
                .success(function(data) {
                    if (data.status === 'success') {
                        successCB(data.data);
                    } else {
                        errorCB(data.data);
                    }
                });
        }

        /** Ajouter un role dans un projet */
        this.addRole = function(userId, projectId, successCB, errorCB) {
            $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + projectId + '/Users/' + userId)
                .success(function (data) {
                    if (data.status === 'success') {
                        successCB(data.data);
                    } else {
                        errorCB(data.data);
                    }
                });
        }

        /** Editer un role */
        this.edit = function(role, successCB, errorCB) {
            $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Roles/' + role.id, role)
                .success(function (data) {
                    if (data.status === 'success') {
                        successCB(data.data);
                    } else {
                        errorCB(data.data);
                    }
                });
        }

        /** Récupérer tous les roles d'un utilisateur à partir de son identifiant */
        this.getRoleUser = function (userId, successCB, errorCB) {
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + userId + '/Roles')
                .success(function (data) {
                    if (data.status === 'success') {
                        successCB(data.data);
                    } else {
                        errorCB(data.data);
                    }
                });
        }

        /** Récupère tous les utilisateurs d'un projet */
        this.getProjectUsers = function (projectId, successCB, errorCB) {
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + projectId + '/Roles')
                .success(function (data) {
                    if (data.status === 'success') {
                        successCB(data.data);
                    } else {
                        errorCB(data.data);
                    }
                });
        }

    }]);