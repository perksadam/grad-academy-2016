# Creating A Message List Component

## Update Message component to take a message

Update the message component's bindings to take a property called message. Use one way binding. [Component Documentation](https://docs.angularjs.org/guide/component)

We will also need to remove the code from $onInit that hardcodes the value of ctrl.message.

Now we will be able to pass a message into our message component by:

```html
<message message="someMessageObject"></message>
```

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

In message-list.component.html, use the [ng-repeat](https://docs.angularjs.org/api/ng/directive/ngRepeat) directive to iterate over all the messages in $ctrl.messages.

If you get stuck look at the docs or some of the [examples](http://plnkr.co/edit/XZXVBQJutHkTliWM0Vu9?p=preview) from the slides

For each message in our message array we want to display it by passing it into our <message></message> component.

## Update index.html

Once the message-list component is created we want to display it in the app. Replace the <message></message> tag in index.html with <message-list></message-list>.

Run the app and make sure everything is working.


