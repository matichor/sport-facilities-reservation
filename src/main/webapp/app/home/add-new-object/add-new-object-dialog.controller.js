(function() {
    'use strict';

    angular.module('sportPlaceReservationApp').controller('AddNewObjectDialogController', AddNewObjectDialogController);

    AddNewObjectDialogController.$inject = ['$uibModalInstance'];

    function AddNewObjectDialogController($uibModalInstance) {
        var vm = this;

        vm.closeDialog = closeDialog;

        function closeDialog() {
            $uibModalInstance.dismiss();
        }
    }
})();
