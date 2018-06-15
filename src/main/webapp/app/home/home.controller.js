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

        function openBookingEventDialog() {
            BookingEventServiceDialog.open();
        }

        function openAddNewObjectDialog() {
            AddNewObjectDialogService.open();
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
            ObjectDefinition.get({name:null, address: null, objectTypeId:null}, function(result){
              console.log(result);
            });
        }

        function register () {
            $state.go('register');
        }

        vm.sortingOrder = vm.sortingOrder;
        vm.reverse = false;
        vm.filteredItems = [];
        vm.groupedItems = [];
        vm.itemsPerPage = 10;
        vm.pagedItems = [];
        vm.currentPage = 0;
        vm.items = [
            {"id":"1","name":"Basen","description":"Basen Krakowska","field3":"Krakowska","field4":"1h","action":"REZERWUJ OBIEKT"},
            {"id":"2","name":"name 2","description":"description 1","field3":"field3 2","field4":"field4 2","action":"REZERWUJ OBIEKT"},
            {"id":"3","name":"name 3","description":"description 1","field3":"field3 3","field4":"field4 3","action":"REZERWUJ OBIEKT"},
            {"id":"4","name":"name 4","description":"description 1","field3":"field3 4","field4":"field4 4","action":"REZERWUJ OBIEKT"},
            {"id":"5","name":"name 5","description":"description 1","field3":"field3 5","field4":"field4 5","action":"REZERWUJ OBIEKT"},
            {"id":"6","name":"name 6","description":"description 1","field3":"field3 6","field4":"field4 6","action":"REZERWUJ OBIEKT"},
            {"id":"7","name":"name 7","description":"description 1","field3":"field3 7","field4":"field4 7","action":"REZERWUJ OBIEKT"},
            {"id":"8","name":"name 8","description":"description 1","field3":"field3 8","field4":"field4 8","action":"REZERWUJ OBIEKT"},
            {"id":"9","name":"name 9","description":"description 1","field3":"field3 9","field4":"field4 9","action":"REZERWUJ OBIEKT"},
            {"id":"10","name":"name 10","description":"description 1","field3":"field3 10","field4":"field4 10","action":"REZERWUJ OBIEKT"},
            {"id":"11","name":"name 11","description":"description 1","field3":"field3 11","field4":"field4 11","action":"REZERWUJ OBIEKT"},
            {"id":"12","name":"name 12","description":"description 1","field3":"field3 12","field4":"field4 12","action":"REZERWUJ OBIEKT"},
            {"id":"13","name":"name 13","description":"description 1","field3":"field3 13","field4":"field4 13","action":"REZERWUJ OBIEKT"},
            {"id":"14","name":"name 14","description":"description 1","field3":"field3 14","field4":"field4 14","action":"REZERWUJ OBIEKT"},
            {"id":"15","name":"name 15","description":"description 1","field3":"field3 15","field4":"field4 15","action":"REZERWUJ OBIEKT"},
            {"id":"16","name":"name 16","description":"description 1","field3":"field3 16","field4":"field4 16","action":"REZERWUJ OBIEKT"},
            {"id":"17","name":"name 17","description":"description 1","field3":"field3 17","field4":"field4 17","action":"REZERWUJ OBIEKT"},
            {"id":"18","name":"name 18","description":"description 1","field3":"field3 18","field4":"field4 18","action":"REZERWUJ OBIEKT"},
            {"id":"19","name":"name 19","description":"description 1","field3":"field3 19","field4":"field4 19","action":"REZERWUJ OBIEKT"},
            {"id":"20","name":"name 20","description":"description 1","field3":"field3 20","field4":"field4 20","action":"REZERWUJ OBIEKT"}
        ];

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

        // functions have been describe process the data for display
        vm.search();

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
