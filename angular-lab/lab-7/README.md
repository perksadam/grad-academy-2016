# We will be adding a new route to display a user's information

##Create a new state for displaying the user-details

Add state to app.config for user-details.
The url for this state will take the id of the user you want to display.

Make the each user-item in the user-list a link that goes to the user-detail page for that user.

You will also need to create a user-details component which you will display as the template for this new state

Display some information that you think is important about the user
- username
- profile picture
- whether or not they are active etc.

Hint: you can access that Id with the $routeParams service.


## Add functionality to send the user a message 
  -you should reuse the new-message component for this

You will need to implement a method in the messageService for sending a direct message.

