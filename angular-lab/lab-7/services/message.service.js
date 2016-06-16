(function () {
    function messageService($http) {
        var token = "xoxp-4759055983-9151840083-16301933616-522b978330";
        var service = {
            getMessages: getMessages,
            postMessage: postMessage
        };

        return service;

        function getIMMessages(userId) {
            return $http.get("https://slack.com/api/im.history?token=" + token +"&channel=C04NB1N81&count=10").then(function (response) {
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

        function postMessage(messageText, channelId){
            return $http.post("https://slack.com/api/chat.postMessage?token=" + token,{
                as_user: true,
                text: messageText,
                channel: channelId
            });
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