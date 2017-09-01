"use strict";

/*

    provide the basic crud interactions with firebase
 
*/

app.factory("todoFactory", function($q, $http, FBCreds){

    // helper function to process the firebase object
    // into an array with it's ugly id assigned as its local id
    const makeArray = function(object){
        return Object.keys(object).map(key => {
            object[key].id = key;
            return object[key];
        });

    };

    // call firebase for all the items
    // firebase returns an object of objects,
    // fo we pass that to makeArray, a helper defined above
    const getAllTasks = function(){
        return $q((resolve, reject)=>{
            $http.get(`${FBCreds.databaseURL}/items.json`)
                .then(items => resolve(makeArray(items.data)))
                .catch(error => reject(error));
        });
    };

    const addTask = function(obj){
        let newObj = JSON.stringify(obj);
        return $http.post(`${FBCreds.databaseURL}/items.json`, newObj)
            .then(data => data)
            .catch(error => console.log("error", error.message));
    };

    // takes an item's id and a an object containing the property to update
    const editTask = function(id, obj) {
        return $q((resolve, reject)=>{
            let newObj = JSON.stringify(obj);
            $http.patch(`${FBCreds.databaseURL}/items/${id}.json`, newObj)
                .then(data=> resolve(data))
                .catch(error => reject(error));
        });
    };

    const deleteTask = function(){

    };

    const getSingleTask = function(itemId){
        return $q((resolve,reject)=> {
            $http.get(`${FBCreds.databaseURL}/items/${itemId}.json`)
                .then(item => resolve(item.data))
                .catch(error => reject(error));
        });
    };


    // returning methods defined above
    return {

        getAllTasks,
        addTask,
        editTask,
        deleteTask,
        getSingleTask
    };

});