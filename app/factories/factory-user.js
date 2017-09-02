"use strict";

/*
    provides the basic auth functionality for firebase
    as well a couple of additional helpers and utility methods related to user stuff.
 */

app.factory("userFactory", function($q, $http){

    let currentUser = null;

    const provider = new firebase.auth.GoogleAuthProvider();

    const isAuthenticated = function (){
        return new Promise ((resolve, reject) => {
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


    
    const logIn = function(user){
        return firebase.auth()
                       .signInWithEmailAndPassword(user.email, user.password);
    };


    const logOut = function(){
        console.log("logging out");
        return firebase.auth().signOut();
    };


    // this takes an object created in the controller
    // which has an email and password from the form data
    // gathered in user.html
    const register = function(user){
        return firebase.auth()
                       .createUserWithEmailAndPassword(user.email, user.password);
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