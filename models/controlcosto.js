app.factory("controlCostoFtry") {
    return {
        get: function (id) {
            return $http({
                url: $rootScope.baseUrl + '/articulo/' + id,
                method: 'GET'
            });
        },
        getAll: function () {
            return $http({
                url: $rootScope.baseUrl + '/articulo',
                method: 'GET'
            });
        }
    }
});