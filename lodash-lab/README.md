# Using Lodash to Work With Collections

## Setting up our test environment

We will need to install Jasmine (the testing framework) and Karma (the test runner)

> 
    npm install jasmine
    npm install karma
    npm install karma-jasmine karma-chrome-launcher
    npm install -g karma-cli

## Configure Karma
From a command window run the command

    karma init

This will have Karma prompt you with questions in order to configure karma for your app

- Select jasmine as the testing framework
- Select yes for Require.js
- Select Chrome for the browsers to capture
- Enter **/*.js for the location of your source and test files
- Do not add any files to ignore
- Select yes for generating a bootstrap file
- Select yes to having Karma run the files on change




