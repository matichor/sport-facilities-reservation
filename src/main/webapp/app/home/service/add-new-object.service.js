(function() {
    'use strict';

    angular.module('sportPlaceReservationApp').factory('AddNewObjectDialogService', AddNewObjectDialogService);

    AddNewObjectDialogService.$inject = ['$uibModal'];

    function AddNewObjectDialogService($uibModal) {
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
                templateUrl: 'app/home/add-new-object/add-new-object-dialog.html',
                controller: 'AddNewObjectDialogController',
                controllerAs: 'vm',
                windowTopClass: 'new-object'
            });
            modalInstance.result.then(resetModal, resetModal);
        }
    }
})();
