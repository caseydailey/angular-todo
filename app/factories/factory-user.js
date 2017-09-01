"use strict";

/*

    provide the basic auth functionality for firebase

 */

app.factory("userFactory", function($q, $http){

    let currentUser = null;

    const provider = new firebase.auth.GoogleAuthProvider();

    const isAuthenticated = function (){
        return new Promise ( (resolve, reject) => {
            firebase.auth().onAuthStateChanged(user => {
                if (user){
                    currentUser = user.uid;
                    resolve(true);
                }else {
                    resolve(false);
                }
            });
        });
    };

    const getCurrentUser = function(){
        return currentUser;
    };


    
    const logIn = function(){

    };


    const logOut = function(){
        console.log("logging out");
        return firebase.auth().signOut();
    };


    const register = function(){

    };

    const authWithProvider = function(){
        return firebase.auth().signInWithPopup(provider);
    };

    return {

        getCurrentUser,
        logIn,
        logOut,
        register,
        isAuthenticated,
        authWithProvider
        
    };

});