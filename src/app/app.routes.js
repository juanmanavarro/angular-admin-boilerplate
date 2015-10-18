(function() {
    'use strict';

    angular
        .module('app.routes', [])
        .config(Routes);

    Routes.$inject = ['$stateProvider', '$urlRouterProvider'];
    function Routes($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/components/home/home.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            });
    }

})();
