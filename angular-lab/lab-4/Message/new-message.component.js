(function(){
    var newMessageComponent = {
        controller: NewMessageController,
        templateUrl: "./Message/new-message.component.html",
        bindings: {
            onAddMessage: '&',
        }

    };

    function NewMessageController(){
        var ctrl = this;

        ctrl.addMessage = function(messageText){
            ctrl.onAddMessage(messageText);
        };

        ctrl.$onInit = function(){

        }
    }

    angular.module('grad-academy-angular').component("newMessage", newMessageComponent);
})();