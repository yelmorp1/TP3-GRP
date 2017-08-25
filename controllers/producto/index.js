app.controller('ProductoCtrl', function ($scope, ProductoFtry) {
    $scope.isLoading = true;
    ProductoFtry.getAll().success(function (data) {
        $scope.listaProducto = data;
        $scope.isLoading = false;
    });

    $scope.eliminar = function(id){
        alert(id);
    }
})