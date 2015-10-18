(function() {
    'use strict';

    angular
        .module('app.controllers', [])
        .controller('HomeController', HomeController);

    HomeController.$inject = [];
    function HomeController() {
        var vm = this;

        vm.title = 'Dashboard';

        vm.dt = new Date();
    }

})();
