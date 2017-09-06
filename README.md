# angular-todo

This project is presented as an epic code-along toward the end of the front-end course at NSS.
It's purpose is to introduce, crash-course style a basic mvc-style angularJS CRUD app which uses Firebase to persist user created data.

As a user, you can:

* login with Google or register with email
* see your tasks (pulled down from firebase)
* add a new task for yourself
* edit a task and save the changes
* mark a task as done
* and, of course, delete a task

# To run

## Fork and Clone

* fork this repository
* clone your fork and ``` cd ``` into the directory git creates for you

## Install Dependencies

Once there, run the following commands:

```

cd lib
npm install
grunt

```

This will install the necessary dependencies to run the project from your localhost.
If you don't have a localhost, go [here](https://www.npmjs.com/package/http-server) to get one.

## Firebase

Next, you'll need to set up your oown firebase project to point your app toward.
You can do that [here](https://firebase.google.com/).

### Upload the JSON

If you want to seed your database with some sample items, you can look in import data/items.json using their handy-dandy console. If you you're not familiar with this process, there's a good explanation [here](https://support.google.com/firebase/answer/6386780?hl=en).

### Credentials

Once you've set up your project, you need to be able to refer to your url and api key in the app.
To accomplish this, you'll need to create a file called 'fb-creds.js' in a directory called 'values' in the 'app' directory.
From the project root directory, just run these commands:

```

cd app
mkdir values && cd $_
touch fb-creds.js

```

Cool. Now you can open this file in your editor and register a constant on 'app' like this:

```

"use strict";


app.constant("FBCreds", {

    apiKey: _yourapiKey_
    authDomain: _yourauthDomain_
    databaseURL: _yourdatabaseURL_
  
});


```

"Where do I get these values?" You might say? In your firebase console, you can click 'Overview' in the sidebar.
This takes you to a screen with a few colorful buttons. One is red and says "Add Firebase to you web app".
click on this and BOOM your details will appear (along with some others you don't need right now) just copy and paste the the above values from firebase to your fb-creds BINGO. 

### .indexOn

The last and final step in configuring your firebase for this app is to set your rules
From your firebase console, click on Database > Rules and edit those rules to look like this:

```

{
  "rules": {
    ".read": true,
    ".write": true,
      "items": {
        ".indexOn": ["uid"]
      }
  }
}


```

This tells firebase we're cool with whoever's logged in reading and writing to the items collection and that we want to be able to search them by user id, This enables us to get items created by a particular user.


# Finally.

Now, open a tab in your teminal, jump to this project's root directory, and run ``` grunt ```
Then in another tab, jump to this project's directory, Fire up your server and head on over to ``` localhost:8080``` or whatever port your local server is on. 

I've left lots of comments and am happy to answer any questions that arise. Good Luck!


