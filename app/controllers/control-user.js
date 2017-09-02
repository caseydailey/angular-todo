"use strict";

app.controller("userCtrl", function($scope, $window, userFactory, $location){

    const vm = $scope;

    // this will hold user's email and password
    vm.account = {};

    vm.register = function(){
        userFactory.register({
            email: vm.account.email,
            password: vm.account.password
        })
        .then(userData => {
            console.log("registered userData", userData);
            vm.logIn();
        })
        .catch(error => console.log("error with login", error));
    };

    vm.logIn = () => userFactory.logIn(vm.account)
                                .then($window.location.href = '#!/task-list');

    vm.loginGoogle = function(){
        userFactory.authWithProvider()
            .then(result => {
                let user = result.user.uid;
                $location.path('/task-list');
                vm.$apply();
            })
            .catch(error => console.log("google login error", error.message, error.code));
    };


});