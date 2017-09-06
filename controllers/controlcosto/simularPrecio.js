app.controller('simularPrecioCtrl', function ($scope, simularPrecioFtry) {
  $scope.isLoading = true;
    controlCostoFtry.getAll().success(function (data) {
        $scope.listaControlCosto = data;
        $scope.isLoading = false;
    });
})