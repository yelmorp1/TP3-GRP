app.controller('ProductoEditarCtrl', function ($scope, $stateParams, $state, $modal, ProductoFtry, 
    ArticuloFtry, CategoriaFtry, NutricionalFtry) {
    var id = $stateParams.id;
    $scope.isLoading = true;
    ProductoFtry.get(id).success(function (data) {
        $scope.producto = data;
        ArticuloFtry.getAll().success(function (data) {
            $scope.listaArticulo = data;
            CategoriaFtry.getAll().success(function (data) {
                $scope.listaCategoria = data;
                $scope.isLoading = false;
            });
        });
    });

    $scope.eliminar = function(id){
        alert(id);
    }
})