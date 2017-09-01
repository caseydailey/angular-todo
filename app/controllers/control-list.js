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
        todoFactory.getAllTasks()
            .then(tasks => vm.tasks = tasks);
    };

    
    const deleteTask = function(){

    };

    
    // called by and ng-change on a checkbox in list.html
    // updates the isComplete property in the database and re-renders the todos
    vm.toggleDoneTask = function(thingy){

        // TODO fix this in the DOM. angular is updating this
        // and then we're updating it and it's counterintuitive
    
        let status = thingy.isCompleted ? true : false;
        let tmpObj = {isCompleted:status};
        console.log("toggleDoneTask", thingy);
        todoFactory.editTask(thingy.id, tmpObj)
            .then(() => showAllTasks());
    };

    showAllTasks();

});