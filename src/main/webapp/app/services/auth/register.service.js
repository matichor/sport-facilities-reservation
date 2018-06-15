(function () {
    'use strict';

    angular
        .module('sportPlaceReservationApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
