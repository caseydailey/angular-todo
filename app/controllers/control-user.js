"use strict";

app.controller("userCtrl", function($scope, $window, userFactory, $location){

    const vm = $scope;

    
    vm.loginGoogle = function(){
        userFactory.authWithProvider()
            .then(result => {
                let user = result.user.uid;
                $location.path('/task-list');
                vm.apply();
            })
            .catch(error => console.log("google login error", error.message, error.code));
    };

    //when first loaded, make sure no one is logged in
  // console.log("what is this?", userFactory.isAuthenticated());
//   if (userFactory.isAuthenticated()) 
//     logout();
// console.log("app isAuth", isAuth());
//   if (isAuth()){
//     console.log("app isAuth", isAuth());
//   }

});