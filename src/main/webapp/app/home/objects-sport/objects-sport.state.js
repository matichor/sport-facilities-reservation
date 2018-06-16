(function() {
    'use strict';

    angular.module('sportPlaceReservationApp').config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('objects-sport', {
            parent: 'app',
            url: '/',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/home/objects-sport/objects-sport.html',
                    controller: 'ObjectsSportController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
