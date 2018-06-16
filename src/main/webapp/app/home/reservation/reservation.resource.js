(function() {
    'use strict';

    angular.module('sportPlaceReservationApp').factory('ReservationResource', ReservationResource);

    ReservationResource.$inject = ['$resource'];

    function ReservationResource($resource) {
        return $resource('api/reservesByUser',
            {},
            {
                get: { method: 'GET', isArray: true },
                params:  { userId: '@userId' }
            }
        );
    }
})();
