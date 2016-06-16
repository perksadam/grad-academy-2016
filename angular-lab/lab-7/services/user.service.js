(function () {

    function userService($http, slackToken) {
        var service = {
            getUser: getUser
        };

        function getUser(userId) {
            return $http.get("https://slack.com/api/users.info?token=" + slackToken + "&user=" + userId).then(function (response) {
                var user = response.data && response.data.user;

                return {
                    uesrId: user.id,
                    name: user.name,
                    avatar: user.profile.image_48,
                }
            }, function (errorResponse) {
                console.log(errorResponse)
            });
        }

        return service;
    }

    angular.module('grad-academy-angular').factory('userService', userService)
})();