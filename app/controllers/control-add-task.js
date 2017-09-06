"use strict";

/*

    provide the data and functionality to handle the creation of new tasks
    using todoFactory to write to the database

 */

app.controller("addTaskCtrl", function($scope, todoFactory, $window, userFactory){

    const vm = $scope;

    // bund some values to scope to customize the form
    vm.title = "New Task";
    vm.submitButtonText = "Add New Task";

    const user = userFactory.getCurrentUser();

    // gather data from form to send to db
    vm.task = {
        assignedTo: "",
        dependencies: "",
        dueDate: "",
        urgency: "",
        task: "",
        isCompleted: false,
        location: "",
        uid: user
    };


    // call factory to add vm.task to db
    // set the href to '#!/task-list'
    // this redirects and applies a digest cycle 
    // so your new task is displayed with the others
    // if you use $location.url, you will only see the new task once you refresh and force a digest cycle
    vm.submitTask = function(){
        todoFactory.addTask(vm.task);
            $window.location.href = "#!/task-list";
    };



});