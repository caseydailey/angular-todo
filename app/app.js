"use strict";

const app = angular.module("TodoApp", ['ngRoute']);

const isAuth = (userFactory) => userFactory.isAuthenticated();

app.config(($routeProvider)=> {
    $routeProvider 
    .when('/', {
        templateUrl: 'partials/list.html',
        controller: 'listCtrl',
        resolve: {isAuth}
    })
    .when('/login', {
        templateUrl: 'partials/user.html',
        controller: 'userCtrl'
    })
    .when('/task-list', {
        templateUrl: 'partials/list.html',
        controller: 'listCtrl',
        resolve: {isAuth}

    })
    .when('/item/newItem', {
        templateUrl: 'partials/form.html',
        controller: 'addTaskCtrl',
        resolve: {isAuth}

    })
    .when('/task/:itemId', {
        templateUrl: 'partials/details.html',
        controller: 'detailTaskCtrl',
        resolve: {isAuth}

    })
    .when('/task/:itemId/edit', {
        templateUrl: 'partials/form.html',
        controller: 'editTaskCtrl',
        resolve: {isAuth}

    })
    .otherwise('/');
});

app.run(($location, FBCreds)=> firebase.initializeApp(FBCreds));