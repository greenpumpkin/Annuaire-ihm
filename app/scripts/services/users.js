
'use strict';
/**
 * @ngdoc function
 * @name pooIhmExemplesApp.service:Users
 * @description
 * # Users
 * Service of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
    .service('Users', ['$http', function Users($http){

        /** Tout récupérer */
        this.getAll = function(successCB, errorCB) {
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/')
                .success(function(data) {
                    if (data.status === 'success') {
                        successCB(data.data);
                    } else {
                        errorCB(data.data);
                    }
                });
        };

        /** Récupérer un utilisateur grace à son id */
        this.get = function(userId, successCB, errorCB) {
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+ userId)
                .success(function(data) {
                    if (data.status === 'success') {
                        successCB(data.data);
                    } else {
                        errorCB(data.data);
                    }
                });
        };

        /** Récupérer les rôles grâce à l'id de l'utilisateur */
        this.getUserRole = function(userId, successCB, errorCB) {
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + userId + '/Roles/')
                .success(function (data) {
                    if (data.status === 'success') {
                        successCB(data.data);
                    } else {
                        errorCB(data.data);
                    }
                });
        }

        /** Récupérer un projet grâce à l'id de l'utilisateur */
        this.getProject = function(userId, successCB, errorCB) {
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + userId + '/Projects/')
                .success(function (data) {
                    if (data.status === 'success') {
                        successCB(data.data);
                    } else {
                        errorCB(data.data);
                    }
                });
        }

        /** Ajouter un utilisateur */
        this.add = function(user, successCB, errorCB) {
            $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Users', user)
                .success(function(data) {
                    if (data.status === 'success') {
                        successCB(data.data);
                    } else {
                        errorCB(data.data);
                    }
                });
        }

        /** Editer un utilisateur */
        this.edit = function(user, successCB, errorCB) {
            $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+ user.id, user)
                .success(function(data) {
                    if (data.status === 'success') {
                        successCB(data.data);
                    } else {
                        errorCB(data.data);
                    }
                });
        }

        /** Supprimer un utilisateur */
        this.delete = function(userId, successCB, errorCB) {
            $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+ userId)
                .success(function(data) {
                    if (data.status === 'success') {
                        successCB(data.data);
                    } else {
                        errorCB(data.data);
                    }
                });
        };

    }]);