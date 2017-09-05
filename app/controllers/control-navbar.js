"use strict";

/*
    the main jobe of this controller is to bind data related to whether a user is logged in or not
    to the the scope of the navbar, which provides conditional affordances based on this
    for instance, a user doesn't see the 'logout' button until they are logged in...
 */

app.controller("navCtrl", function($scope, $window, userFactory, $rootScope, filterFactory){

    $rootScope.showSearch = true;

    // instantiate an alias for $scope
    const vm = $scope;
    vm.searchText = filterFactory;

    
    // default to false
    vm.isLoggedIn = false;

    // this will be userd to filter the list based on
    // user's input into the search bar
    vm.searchText = filterFactory;

    vm.logOut = () => userFactory.logOut();
    
     // hmmm... how, when, and why does this actually work?
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