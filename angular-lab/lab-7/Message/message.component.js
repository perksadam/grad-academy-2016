(function(){
    var messageComponent = {
        controller: MessageController,
        templateUrl: "./Message/message.component.html",
        bindings: {
            message: "<"
        }
    };

    function MessageController(){
        var ctrl = this;

        ctrl.$onInit = function(){
        }
    }

    angular.module('grad-academy-angular').component("message", messageComponent);
})();