(function(){
    var messageListComponent = {
        controller: MessageListController,
        templateUrl: "./message/message-list.component.html"
    };

    function MessageListController(messageService){
        var ctrl  = this;

        ctrl.postMessage = function(messageText){
            messageService.postMessage(messageText);

            refreshMessageList();
            ctrl.newMessageText = "";
        };

        ctrl.$onInit = function(){
            refreshMessageList();
        };

        function refreshMessageList(){
            ctrl.messages = messageService.getMessages();
        }
    }

    angular.module("grad-academy-angular").component("messageList", messageListComponent)
})();