(function() {
    'use strict';

    angular.module('sportPlaceReservationApp').controller('ReservationController', ReservationController);

    ReservationController.$inject = ['Principal', 'ReservationResource'];

    function ReservationController(Principal, ReservationResource) {
        var vm = this;

        vm.getFullData = getFullData;

        vm.getFullData();

        function getFullData() {
            return Principal.identity().then(function(account) {
                return vm.reservationData = ReservationResource.get({ userId: account.id }).$promise.then(function(resp){
                    vm.getFullReservation = resp;
                });
            });
        }
    }
})();
