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
        ProductoFtry.getDetails(id).success(function (data) {
            $scope.Insumos = data;
            console.log(data);
            calcularCosto();
        });
    });

    function calcularCosto(){
        var porciones = $scope.producto.Porciones;
        var costoTotal = parseFloat(0);
        var ingrediente;
        for (var idx = 0; idx < $scope.Insumos.length; idx++) {
            ingrediente = $scope.Insumos[idx];
            costoTotal += parseFloat(ingrediente.Importe);
        }
        $scope.producto.Costo = parseFloat(costoTotal).toFixed(2);
        $scope.producto.CostoUnitario = parseFloat(costoTotal/porciones).toFixed(2);
        $scope.producto.Precio = parseFloat((costoTotal * 0.30) +  costoTotal).toFixed(2);
    }

    $scope.eliminar = function(id){
        alert(id);
    }
})