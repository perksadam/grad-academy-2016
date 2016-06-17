(function () {
    function messageService($http) {
        var token = "";
        var service = {
            getMessages: getMessages,
            postMessage: postMessage
        };

        return service;

        function postMessage(messageText, channelId){
            return $http.get("https://slack.com/api/chat.postMessage?token=" + token + "&as_user=true&channel=" + channelId + "&text=" + messageText );
        }

        function getMessages(channelId) {
            return $http.get("https://slack.com/api/channels.history?token=" + token + "&channel="+ channelId + "&count=10").then(function (response) {
                var messages = response.data && response.data.messages;

                return messages.map(function (message) {
                    return {
                        user: message.user,
                        content: message.text,
                        date: new Date(message.ts * 1000)
                    }
                });
            }, function (errorResponse) {
                console.log(errorResponse)
            });
        }
    }

    angular.module('grad-academy-angular').factory('messageService', messageService)
})();