app.controller('controlCostoCtrl', function ($scope, controlCostoFtry) {
    $scope.isLoading = true;
    $scope.showNoData = false;
    ProductoFtry.getAll().success(function (data) {
        $scope.listaProducto = data;
        $scope.isLoading = false;
        $scope.showNoData = false;
    }).error(function(err){
        $scope.isLoading = false;
        $scope.showNoData = true;
    });

    $scope.eliminar = function(id){
        alert(id);
    }
})