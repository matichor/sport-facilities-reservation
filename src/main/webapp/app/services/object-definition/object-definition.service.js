(function() {
    'use strict';

    angular
        .module('sportPlaceReservationApp')
        .factory('ObjectDefinition', ObjectDefinition);

    ObjectDefinition.$inject = ['$resource'];

    function ObjectDefinition($resource) {
        var service = $resource('api/objectdefinitions', {}, {
            'get': { method: 'GET', params: {name:'@name', address: '@address', objectTypeId:'@objectTypeId'}, isArray: true}
        });
        return service;
    }
})();
