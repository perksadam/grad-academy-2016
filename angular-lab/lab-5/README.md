# Creating Services

## Create a MessageService

Create a "service" folder and add a file called "message.service.js". This service will manage our list of messages.

In "message.service.js", use the [factory](https://docs.angularjs.org/api/ng/type/angular.Module#factory) method to create a service named *messageService*.

Add a "postMessage" and "getMessages" method to the service. Move the logic from the message-list controller into these two methods.

**The service should maintain an array of messages and expose methods to get/manipulate that array**

Important: Don't forget to add the "message.service.js" file to our index.html

Make sure to follow [best practices](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#factories).
## Using the service in the message-list component

Inject the 