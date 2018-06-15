(function() {
    'use strict';

    angular.module('sportPlaceReservationApp').factory('BookingEventServiceDialog', BookingEventServiceDialog);

    BookingEventServiceDialog.$inject = ['$uibModal'];

    function BookingEventServiceDialog($uibModal) {
        var service = {
            open: open
        };

        var modalInstance = null;
        var resetModal = function() {
            modalInstance = null;
        };

        return service;

        function open() {
            if (modalInstance !== null) return;
            modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/home/booking-event-dialog/booking-event-dialog.html',
                controller: 'BookingEventDialogController',
                controllerAs: 'vm',
            });
            modalInstance.result.then(resetModal, resetModal);
        }
    }
})();
