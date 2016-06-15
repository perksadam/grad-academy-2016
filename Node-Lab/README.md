# Creating A Node Web Server

Import the http module into your app
```javascript
var http = require('http');
``` 
Create variables to store the url of our server and what port it will listen on

```javascript
var port = 3000;
var serverUrl = "localhost";
``` 
Create a server using the http.createServer method

>
```javascript
var server = http.createServer(function(req, res) {
    if(req.url == "/sample.html") {

        fs.readFile("sample.html", function(err, text){
            res.setHeader("Content-Type", "text/html");
            res.end(text);
        });
        return;
    }
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
---
We need to tell the server to start listening. 

Log a message saying that we are starting the server, and then tell it to start listening using our *port* and *serverUrl* variables

```javascript
console.log("Starting web server at " + serverUrl + ":" + port);
server.listen(port, serverUrl);
```

Open a command window in the same directory as your webserver.js file and run the follwoing command

    node webServer

You should see a message that your server has started. Open a browser and navigate to the url our server is listening on. What do you see?

#
#
#
## Now we are going to have our server return an html file from the file system
----
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

