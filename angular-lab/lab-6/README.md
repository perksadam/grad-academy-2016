# Using the Slack API

We will be using the slack API in this lab to get and create messages, as well as display user information for each message.

Obtain an api token from slack [here](https://api.slack.com/docs/oauth-test-tokens)

You will need to pass this token in every request you make with slack. Store it in a variable in the messageService.

## Update the messageService

Inject the $http service. You will use this service to make requests to the slack API.

Update the *getMessages* method to take a *channelId* parameter. We will use this channelId when calling slack's [channels.history](https://api.slack.com/methods/channels.history) endpoint. 

```javascript
function getMessages(channelId){
    //use $http to call slack's channel.history endpoint to get a list of messages
}
```

You will need to map those messages into the format that our components are expecting

```javascript
{
    userId: "",
    content: "",
    date: ""
}
```

*Note: we will deal with getting the user's information later in the lab*

Update the *postMessage* method to take a *messageText* and *channelId* parameter. Use these parameters when making a call to the [chat.postMessage](https://api.slack.com/methods/chat.postMessage) endpoint.

**HINT: You can use [postman](https://www.getpostman.com/) to make it easier to test your api calls.**

## Update MessageListController to consume promises

The messageService should now be returning promises. Update the places where the messageService is being used to appropriately handle the promise being returned

*Hint: update the controller data in the .then of the promises*

## Getting User Information

Notice that the messages returned from *channels.history* only give us the user's Id. We will need to get more information about the user to display with each message.

## Create User Service

Create a userService in the services folder.

In the userService add a method to get a user by Id and use the [users.info](https://api.slack.com/methods/users.info) endpoint to retrieve the user's information

## Map User Information for each message

In the MessageListController ues the userService to get the user information for each message that is returned from the messageService.
