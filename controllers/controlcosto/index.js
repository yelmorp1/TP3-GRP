app.controller('controlCostoCtrl', function ($scope, controlCostoFtry) {
    $scope.isLoading = true;
    controlCostoFtry.getAll().success(function (data) {
        $scope.listaControlCosto = data;
        $scope.isLoading = false;
    });

})