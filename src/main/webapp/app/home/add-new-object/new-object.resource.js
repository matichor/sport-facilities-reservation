(function() {
    'use strict';

    angular.module('sportPlaceReservationApp').factory('NewObjectTypeResource', NewObjectTypeResource);

    NewObjectTypeResource.$inject = ['$resource'];

    function NewObjectTypeResource($resource) {
        return $resource(
            'api/objecttypes', {},
            {
                get: { method: 'GET', isArray: true },
                save: {
                    url: 'api/objectdefinitions',
                    method: 'POST'
                }
            }
             
        );
    }
})();
