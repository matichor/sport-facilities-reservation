(function() {
    'use strict';

    angular
        .module('sportPlaceReservationApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'Principal', 'LoginService', '$state', '$filter', 'BookingEventServiceDialog',  'AddNewObjectDialogService', 'ObjectDefinition'];

    function HomeController ($scope, Principal, LoginService, $state, $filter, BookingEventServiceDialog, AddNewObjectDialogService, ObjectDefinition) {
        var vm = this;

        vm.account = null;
        vm.isAuthenticated = null;
        vm.login = LoginService.open;
        vm.register = register;
        vm.openBookingEventDialog = openBookingEventDialog;
        vm.openAddNewObjectDialog = openAddNewObjectDialog;
        vm.getObjectDefinition = getObjectDefinition;

        vm.getObjectDefinition();

        function openBookingEventDialog(item) {
            BookingEventServiceDialog.open(item);
        }

        function openAddNewObjectDialog() {
            AddNewObjectDialogService.open().result.then(function(){
                vm.getObjectDefinition();
            });
        }

        $scope.$on('authenticationSuccess', function() {
            getAccount();
        });

        getAccount();

        function getAccount() {
            Principal.identity().then(function(account) {
                vm.account = account;
                console.log(vm.account);
                vm.isAuthenticated = Principal.isAuthenticated;
            });
        }

        function getObjectDefinition(){
            ObjectDefinition.get({name:null, address: null, objectTypeId:null}).$promise.then(function(resp){
                angular.forEach(resp, function(value,key){
                    value.action = 'REZERWACJA';
                });
                vm.items = resp;
                vm.search();
            });
        }

        function register () {
            $state.go('register');
        }

        vm.sortingOrder = vm.sortingOrder;
        vm.reverse = false;
        vm.filteredItems = [];
        vm.groupedItems = [];
        vm.itemsPerPage = 20;
        vm.pagedItems = [];
        vm.currentPage = 0;

        var searchMatch = function (haystack, needle) {
            if (!needle) {
                return true;
            }
            return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
        };

        vm.search = function () {
            vm.filteredItems = $filter('filter')(vm.items, function (item) {
                for(var attr in item) {
                    if (searchMatch(item[attr], vm.query))
                        return true;
                }
                return false;
            });
            // take care of the sorting order
            if (vm.sortingOrder !== '') {
                vm.filteredItems = $filter('orderBy')(vm.filteredItems, vm.sortingOrder, vm.reverse);
            }
            vm.currentPage = 0;
            // now group by pages
            vm.groupToPages();
        };

        vm.groupToPages = function () {
            vm.pagedItems = [];

            for (var i = 0; i < vm.filteredItems.length; i++) {
                if (i % vm.itemsPerPage === 0) {
                    vm.pagedItems[Math.floor(i / vm.itemsPerPage)] = [ vm.filteredItems[i] ];
                } else {
                    vm.pagedItems[Math.floor(i / vm.itemsPerPage)].push(vm.filteredItems[i]);
                }
            }
        };

        vm.range = function (start, end) {
            var ret = [];
            if (!end) {
                end = start;
                start = 0;
            }
            for (var i = start; i < end; i++) {
                ret.push(i);
            }
            return ret;
        };

        vm.prevPage = function () {
            if (vm.currentPage > 0) {
                vm.currentPage--;
            }
        };

        vm.nextPage = function () {
            if (vm.currentPage < vm.pagedItems.length - 1) {
                vm.currentPage++;
            }
        };

        vm.setPage = function () {
            vm.currentPage = vm.n;
        };


        // change sorting order
        vm.sort_by = function(newSortingOrder) {
            if (vm.sortingOrder == newSortingOrder)
                vm.reverse = !vm.reverse;

            vm.sortingOrder = newSortingOrder;

            // icon setup
            $('th i').each(function(){
                // icon reset
                $(this).removeClass().addClass('icon-sort');
            });
            if (vm.reverse)
                $('th.'+new_sorting_order+' i').removeClass().addClass('icon-chevron-up');
            else
                $('th.'+new_sorting_order+' i').removeClass().addClass('icon-chevron-down');
        };

    }
})();
