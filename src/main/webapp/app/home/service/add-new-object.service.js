(function() {
    'use strict';

    angular.module('sportPlaceReservationApp').factory('AddNewObjectDialogService', AddNewObjectDialogService);

    AddNewObjectDialogService.$inject = ['$uibModal', 'NewObjectTypeResource', 'Principal'];

    function AddNewObjectDialogService($uibModal, NewObjectTypeResource, Principal) {
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
                windowTopClass: 'new-object',
                resolve: {
                    types: function() {
                        return NewObjectTypeResource.get();
                    },
                    userId: function() {
                        return Principal.identity().then(function(account) {
                            var userId = account.id;
                            return userId;
                        });
                    },
                    clearInstance: function() {
                        return resetModal;
                    }
                }
            });
            // modalInstance.result.then(resetModal, resetModal);
            return modalInstance;
        }
    }
})();
