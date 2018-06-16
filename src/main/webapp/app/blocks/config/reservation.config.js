(function() {
    'use strict';

    angular
        .module('sportPlaceReservationApp')
        .config(reservationServiceConfig);

    reservationServiceConfig.$inject = ['reservationConfigProvider'];

    function reservationServiceConfig(reservationConfigProvider) {
        var config = {
            getAvailableHoursAPIUrl: "api/availableHours",
            reserveAPIUrl: "api/reserve"
        };

        reservationConfigProvider.set(config);
    }
})();
