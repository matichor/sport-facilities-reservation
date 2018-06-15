(function() {
    'use strict';

    angular.module('sportPlaceReservationApp').controller('AddNewObjectDialogController', AddNewObjectDialogController);

    AddNewObjectDialogController.$inject = ['$uibModalInstance', 'types', 'NewObjectTypeResource', 'userId', 'clearInstance'];

    function AddNewObjectDialogController($uibModalInstance, types, NewObjectTypeResource, userId,  clearInstance) {
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
            vm.model.$save().then(function() {
                clearInstance();
                $uibModalInstance.close();
            });
        }

        function closeDialog() {
            $uibModalInstance.dismiss();
        }
    }
})();
