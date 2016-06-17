(function(){
    var messageListComponent = {
        controller: MessageListController,
        templateUrl: "./message/message-list.component.html"
    };

    function MessageListController(){
        var ctrl  = this;

        ctrl.postMessage = function(messageText){
                ctrl.messages.push({
                    content: messageText,
                    user: "me",
                    date: new Date()
                });
        };

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
    }

    angular.module("grad-academy-angular").component("messageList", messageListComponent)
})();