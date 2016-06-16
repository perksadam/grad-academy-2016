(function(){
    angular
        .module('grad-academy-angular')
        .config(configure);

    configure.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configure($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("messages/C0GAW6YLC");

        $stateProvider
            .state("messages",{
                url: "/messages/{channelId:string}",
                template: "<message-list></message-list>"
            });
    }
})();