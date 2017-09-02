"use strict";

/*

    handle data and functionality needed in list.html
    using todoFactory and userFactory to interact with the database

 */

app.controller("listCtrl", function($scope, todoFactory, userFactory){

    // putting $scope in a container
    const vm = $scope;
    vm.tasks =[];
    
    // get all tasks from firebase, using the factory
    // and bind the returned array to scope (vm) 
    const showAllTasks = function(){
        let user = userFactory.getCurrentUser();
        todoFactory.getAllTasks(user)
            .then(tasks => vm.tasks = tasks);
    };

    
    // called from list.html gets the itemId from $routeParams
    // and passes this to the factory 
    vm.deleteTask = function(id){
        todoFactory.deleteTask(id)
            .then(()=>showAllTasks());
    };

    
    // called by and ng-change on a checkbox in list.html
    // updates the isComplete property in the database and re-renders the todos
    vm.toggleDoneTask = function(thingy){
        todoFactory.editTask(thingy.id, {isCompleted:thingy.isCompleted})
            .then(()=>showAllTasks());
    };

    showAllTasks();

});