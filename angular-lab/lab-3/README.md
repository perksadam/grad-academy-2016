# Creating A Message List Component

## Create the message-list component

Add new files *message-list.component.js* and *message-list.component.html* to Message folder

In message-list.component.js create a new component named "messageList". Create a controller for it and use *message-list.component.html* as it's template. Refer to the [component documentation](https://docs.angularjs.org/guide/component) for help.

In the $onInit function of the message-list controller, assign the below array to a property to the controller called "messages". It should look something like this:

```javascript
ctrl.$onInit = function(){
    ctrl.messages = [
    {
        user: "Adam",
        content: "We're making so many components",
        date: new Date("2016-05-30T09:00")
    },
    {
        user: "Jim",
        content: "I like coding with babies.",
        date: new Date('2016-05-30T08:45')
    },
    {
        user: "Jim",
        content: "I also like bounded contexts!",
        date: new Date('2016-05-30T10:00')
    }];
}
```

### Now we need to display all our messages