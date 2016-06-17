(function () {
    function messageService() {
        var token = "";

        var messages = [
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

        var service = {
            getMessages: getMessages,
            postMessage: postMessage
        };

        return service;

        function postMessage(messageText){
            messages.push({
                content: messageText,
                user: "me",
                date: new Date()
            });
        }

        function getMessages() {
            return messages;
        }
    }

    angular.module('grad-academy-angular').factory('messageService', messageService)
})();