(function(){
    var messageListComponent = {
        controller: MessageListController,
        templateUrl: "./message/message-list.component.html"
    };

    function MessageListController(messageService, userService, $stateParams){
        var ctrl  = this;
        var channelId = $stateParams.channelId;

        ctrl.postMessage = function(messageText){
            messageService.postMessage(messageText, channelId)
                .then(function(){
                    refreshMessageList();
                    ctrl.newMessageText = "";
                });
        };

        ctrl.$onInit = function(){
            refreshMessageList();
        };

        function refreshMessageList(){
            messageService.getMessages(channelId).then(function(messages){
                messages.forEach(function(message){
                    userService.getUser(message.user).then(function(user){
                        message.userName = user.name;
                        message.avatar = user.avatar;
                    })
                });
                ctrl.messages = messages;
            });
        }
    }

    angular.module("grad-academy-angular").component("messageList", messageListComponent)
})();