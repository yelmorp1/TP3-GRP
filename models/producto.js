app.factory("ProductoFtry", function ($http, $location) {
    return {
        get: function (id) {
            return $http({
                url: 'http://grpwebapi.azurewebsites.net/api/producto/' + id,
                method: 'GET'
            });
        },
        getAll: function () {
            return $http({
                url: 'http://grpwebapi.azurewebsites.net/api/producto',
                method: 'GET'
            });
        },
        update: function (data) {
            return $http({
                url: 'data/Area/update',
                method: "POST",
                data: data,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
        },
        create: function (data) {
            return $http({
                url: 'data/Area/create',
                method: "POST",
                data: data,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
        },
        delete: function (data) {
            return $http({
                url: 'data/Area/delete',
                method: "POST",
                data: data,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
        }
    }
});