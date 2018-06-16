(function() {
    'use strict';

    angular.module('sportPlaceReservationApp').config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('reservation', {
            parent: 'app',
            url: '/',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/home/reservation/reservation.html',
                    controller: 'ReservationController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
