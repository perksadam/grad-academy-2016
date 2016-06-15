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

    console.log("Request: " + req.url);

    if(req.url == "/sample.html") {

        fs.readFile("sample.html", function(err, text){
            res.setHeader("Content-Type", "text/html");
            res.end(text);
        });
        return;

    }

    res.setHeader("Content-Type", "text/html");
    res.end("<p>Hello World.</p>");

});
```

## Now we are going to have our server return an html file from the file system
---
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

