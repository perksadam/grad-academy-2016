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

Install angular from npm

    npm install --save angular
    
the **- -save** tells npm to add angular to our package.json as a dependency.

Add a script tag in the header of of our index.html to include angular

```html
<script src="node_modules/angular/angular.min.js"></script>
```

## Creating The App Module

Add a file name *app.js* and make include it in index.html with a <script></script> tag.

In this file use angular to create a module and name it "grad-academy-angular".

```javascript
(function () {
    angular.module("grad-academy-angular", [])
})();
```

## Bootstrapping The Application

We need to tell Angular what part of the page to bootstrap the application to. We also need to tell it to bootstrap it using our new module.

On the body tag of the html, add the ng-app directive and tell it to use our "grad-academy-angular" module

```html
<body ng-app="grad-academy-angular">
    Grad Academy Angular
</body>
```

Let's add some angular expressions to the page to make sure everything is working.

Update the contents of the body to look like the following

```html
<body ng-app="grad-academy-angular">
    Grad Academy Angular
    <div>
        {{"hello world"}}
    </div>
    <div>
        1 + 2 = {{1 + 2}}
    </div>
</body>
```

View the app in the browser. What do you see? Is the app successfully bootstrapped?

