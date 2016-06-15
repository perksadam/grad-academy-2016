# Creating A Node Web Server

Create a javascript file and call it *webserver.js*

In *webserver.js* load the http module at the top of the file
```javascript
var http = require('http');
``` 
Create variables to store the url of our server and what port it will listen on

```javascript
var port = 3000;
var serverUrl = "localhost";
``` 
Create a server using the http.createServer method

```javascript
var server = http.createServer(function(req, res) {
    //code for our server goes here
    
});
```
## We need to tell the server how to handle each request
#### We will add the logic for the server in the body of the function being passed to the *http.createServer()* method
 
Log each request that the reserver receives 

```javascript
console.log("Request: " + req.url);
```

Set the header to specify that we are returning html in the response
```javascript
res.setHeader("Content-Type", "text/html");
```
Finally, we are going to return the response by calling *res.end()*

We will call *res.end()* with the html that we want to return in the response
```javascript
res.end("<p>Hello World.</p>");
```

## Starting the Server

We need to tell the server to start listening. 

Log a message saying that we are starting the server, and then tell it to start listening using our *port* and *serverUrl* variables

```javascript
console.log("Starting web server at " + serverUrl + ":" + port);
server.listen(port, serverUrl);
```

Open a command window in the same directory as your webserver.js file and run the follwoing command

    node webServer

You should see a message that your server has started. Open a browser and navigate to the url our server is listening on. What do you see?


----

#
#
#
## Now we are going to have our server return an html file from the file system

 Add an HMTL file to the directory called "sample.html"
 
 **paste the following html into sample.html**
 
>
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sample HTML Page</title>
</head>
<body>
    This is a sample HTML page
</body>
</html>
```

## Returning a file from our server

**We will need to use node's File System module to read the file we want to return**

Load the File System module at the top of *webserver.js*

```javascript
var fs = require('fs');
```

**We need to tell our server to listen for certain requests and handle them accordingly.**

In our server body, check the url of the request to see if it matches "sample.html"

```javascript
if(req.url == "/sample.html") {
    //our server will do something different when the request is for sample.html
        
    }
```

Inside the *if* block, read the contents of our *sample.html* file and return it using res.end(). We will then *return* out of the code block;
```javascript
fs.readFile("sample.html", function(err, text){
    res.setHeader("Content-Type", "text/html");
    res.end(text);
});
return;
```

Start your server again and use a browser to navigate to our servers url as before. You should see the same text as last time. Now append "*/sample.html*" to the end of the url. The server should be returning the *sample.html* file.
