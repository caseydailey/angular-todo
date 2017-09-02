"use strict";

// instatiate the module as 'app'
const app = angular.module("TodoApp", ['ngRoute']);

// ckecks to see if a user is logged in
// this is checked as the 'resolve' in most views
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

// .run
app.run(($location, FBCreds)=> firebase.initializeApp(FBCreds));