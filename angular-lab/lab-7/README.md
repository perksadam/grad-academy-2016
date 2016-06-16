# We will be pairing up for this lab
#
#
#

# In this lab we will add the ability to display a list channels that we can then navigate to 
#

## The message-list component has been updated to display the messages of a specific channel based on url parameters 

Look at the state configuration for the "message-list" state. Notice how it takes a "channelId" as a parameter. This state is now expecting to have a string as the last part of the url will be used as the channelId.

We are going to add a new state for displaying a list of channels. We will then be able to click on one of those channels and navigate to a specific channel's message-list.

## Create a new state for displaying list of channels

Add a new state to the app.config for the "channels" state. (see [$stateProvider](http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$stateProvider))

Create a channel-list component that will be used as the template for the "channels" state.

You will need to create a channelService for getting the list of channels. See the [slack documentation](https://api.slack.com/methods/channels.list).

Make each item in the list a link that takes you to the message-list for that channel (directs you to the message-list state with the id of that channel). (see [ui-sref](http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.directive:ui-sref))

We will also want to update the default state for the app in app.config (see otherwise method of [$urlRouterProvider](http://angular-ui.github.io/ui-router/site/#/api/ui.router.router.$urlRouterProvider))

## References

[ui-router](http://angular-ui.github.io/ui-router/site/#/api/)

[$stateProvider](http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$stateProvider)

[ui-sref](http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.directive:ui-sref)
