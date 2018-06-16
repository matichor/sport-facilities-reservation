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

        function open(objectId) {
            if (modalInstance !== null) return;
            modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/home/booking-event-dialog/booking-event-dialog.html',
                controller: 'BookingEventDialogController',
                controllerAs: 'vm',
                windowTopClass: 'booking-event',
                resolve: {
                    itemId: function () {
                        console.log(objectId);
                        return objectId;
                    }
                }
            });
            modalInstance.result.then(resetModal, resetModal);
        }
    }
})();
