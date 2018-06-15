(function() {
    'use strict';

    angular.module('sportPlaceReservationApp').controller('AddNewObjectDialogController', AddNewObjectDialogController);

    AddNewObjectDialogController.$inject = ['$uibModalInstance', 'types', 'NewObjectTypeResource', 'userId'];

    function AddNewObjectDialogController($uibModalInstance, types, NewObjectTypeResource, userId) {
        var vm = this;

        vm.closeDialog = closeDialog;
        vm.saveNewObject = saveNewObject;

        vm.objectTypes = types;

        vm.userId = userId;

        console.log(vm.userId);

        vm.model = new NewObjectTypeResource({
            userId: userId
        });

        function saveNewObject() {
            vm.model.$save();
            $uibModalInstance.close();
        }

        function closeDialog() {
            $uibModalInstance.dismiss();
        }
    }
})();
