(function() {
    'use strict';

    angular.module('sportPlaceReservationApp').controller('ObjectsSportController', ObjectsSportController);

    ObjectsSportController.$inject = [];

    function ObjectsSportController() {
        var vm = this;

        vm.sportplaces = [
            {
                "json_featuretype" : "gp_sportowe_point",
                "FID" : 0,
                "ID" : 1,
                "KOD_POCZTO" : "25-018",
                "NAZWA" : "Hala Widowiskowo-Sportowa",
                "NR_BUDYNKU" : "1",
                "TELEFON" : "0-41 361-38-54",
                "ULICA" : "0ytnia",
                "json_ogc_wkt_crs" : "PROJCS[\"ETRS89 / Poland CS2000 zone 7\",GEOGCS[\"unnamed\",DATUM[\"unnamed\",SPHEROID[\"GRS 1980\",6378137,298.2572221010002]],PRIMEM[\"Greenwich\",0],UNIT[\"degree\",0.0174532925199433]],PROJECTION[\"Transverse_Mercator\"],PARAMETER[\"latitude_of_origin\",0],PARAMETER[\"central_meridian\",21],PARAMETER[\"scale_factor\",0.999923],PARAMETER[\"false_easting\",7500000],PARAMETER[\"false_northing\",0],UNIT[\"METER\",1]]",
                "json_geometry" : {
                    "type" : "Point",
                    "coordinates" : [ 7473133.94, 5637186.04 ]
                }
            },
            {
                "json_featuretype" : "gp_sportowe_point",
                "FID" : 1,
                "ID" : 2,
                "KOD_POCZTO" : "25-701",
                "NAZWA" : "Hala Mosir",
                "NR_BUDYNKU" : "72",
                "TELEFON" : "0-41 346-14-95",
                "ULICA" : "Krakowska",
                "json_ogc_wkt_crs" : "PROJCS[\"ETRS89 / Poland CS2000 zone 7\",GEOGCS[\"unnamed\",DATUM[\"unnamed\",SPHEROID[\"GRS 1980\",6378137,298.2572221010002]],PRIMEM[\"Greenwich\",0],UNIT[\"degree\",0.0174532925199433]],PROJECTION[\"Transverse_Mercator\"],PARAMETER[\"latitude_of_origin\",0],PARAMETER[\"central_meridian\",21],PARAMETER[\"scale_factor\",0.999923],PARAMETER[\"false_easting\",7500000],PARAMETER[\"false_northing\",0],UNIT[\"METER\",1]]",
                "json_geometry" : {
                    "type" : "Point",
                    "coordinates" : [ 7471487.14, 5636297.13 ]
                }
            },
            {
                "json_featuretype" : "gp_sportowe_point",
                "FID" : 2,
                "ID" : 3,
                "KOD_POCZTO" : "25-043",
                "NAZWA" : "Hala Legion-w",
                "NR_BUDYNKU" : "15",
                "TELEFON" : "0-41 348-09-43",
                "ULICA" : "Boczna",
                "json_ogc_wkt_crs" : "PROJCS[\"ETRS89 / Poland CS2000 zone 7\",GEOGCS[\"unnamed\",DATUM[\"unnamed\",SPHEROID[\"GRS 1980\",6378137,298.2572221010002]],PRIMEM[\"Greenwich\",0],UNIT[\"degree\",0.0174532925199433]],PROJECTION[\"Transverse_Mercator\"],PARAMETER[\"latitude_of_origin\",0],PARAMETER[\"central_meridian\",21],PARAMETER[\"scale_factor\",0.999923],PARAMETER[\"false_easting\",7500000],PARAMETER[\"false_northing\",0],UNIT[\"METER\",1]]",
                "json_geometry" : {
                    "type" : "Point",
                    "coordinates" : [ 7472579.68, 5635692.87 ]
                }
            },
            {
                "json_featuretype" : "gp_sportowe_point",
                "FID" : 3,
                "ID" : 4,
                "KOD_POCZTO" : "25-414",
                "NAZWA" : "Hala Sportowa w DSbrowie",
                "NR_BUDYNKU" : "338",
                "TELEFON" : "413676883",
                "ULICA" : "Warszawska",
                "json_ogc_wkt_crs" : "PROJCS[\"ETRS89 / Poland CS2000 zone 7\",GEOGCS[\"unnamed\",DATUM[\"unnamed\",SPHEROID[\"GRS 1980\",6378137,298.2572221010002]],PRIMEM[\"Greenwich\",0],UNIT[\"degree\",0.0174532925199433]],PROJECTION[\"Transverse_Mercator\"],PARAMETER[\"latitude_of_origin\",0],PARAMETER[\"central_meridian\",21],PARAMETER[\"scale_factor\",0.999923],PARAMETER[\"false_easting\",7500000],PARAMETER[\"false_northing\",0],UNIT[\"METER\",1]]",
                "json_geometry" : {
                    "type" : "Point",
                    "coordinates" : [ 7477146.84, 5640988.32 ]
                }
            }
        ]
    }
})();
