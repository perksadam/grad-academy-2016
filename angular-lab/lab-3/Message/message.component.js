(function(){
    var messageComponent = {
        controller: MessageController,
        templateUrl: "./Message/message.component.html"

    };

    function MessageController(){
        var ctrl = this;

        ctrl.$onInit = function(){
            ctrl.message = {
                user: "Adam",
                content: "Let's learn some Angular",
                date: new Date()
            }
        }
    }

    angular.module('grad-academy-angular').component("message", messageComponent);
})();