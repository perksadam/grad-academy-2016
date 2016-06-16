# Creating an Angular App

## Install Dependencies

We will first need to install some packages that we will use to run our app

We will be using [gulp] (http://gulpjs.com/) and will need to install it
Open a command window in our lab-1 directory and run the following command

    npm install --global gulp-cli

We will then need to install the other devdependencies listed in our package.json:

    npm install
    
Now that our dependecies are installed we will use gulp to start a tool called  [browsersync](https://www.browsersync.io/docs)

Run the following command

    gulp run

This will execute the *run* task in gulpfile.js. This task starts browsersync, which starts a server listening at localhost:3000.

Browsersync also watch all of the files in our app and automatically reload our web page.

A browser should automatically open and navigate to our app. You should see a web page that says "Grad Academy Angular"

## Adding Angular