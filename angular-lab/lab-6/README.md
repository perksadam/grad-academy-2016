# Using the Slack API

We will be using the slack API in this lab to get and create messages, as well as display user information for each message.

## Update the messageService

Obtain an api token from slack [here](https://api.slack.com/docs/oauth-test-tokens)

You will need to pass this token in every request you make with slack. Store it in a variable in the messageService.

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
    username: "",
    content: "",
    date: ""
}
```

Update the *postMessage* method to take a *messageText* and *channelId* parameter. Use these parameters when making a call to the [chat.postMessage](https://api.slack.com/methods/chat.postMessage) endpoint.

**HINT: You can use [postman](https://www.getpostman.com/) to make it easier to test your api calls.**
