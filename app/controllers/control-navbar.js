"use strict";

app.controller("navCtrl", function($scope, $window, userFactory){

    // instantiate an alias for $scope
    const vm = $scope;
    
    vm.isLoggedIn = false;

    vm.logout = () => userFactory.logOut();

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          vm.isLoggedIn = true;
          vm.$apply();
        } else {
          vm.isLoggedIn = false;
          $window.location.href = "#!/login";
        }
      });


});