app.controller('ProductoCrearCtrl', function ($scope, $state, $modal, ProductoFtry, ArticuloFtry, CategoriaFtry, 
    NutricionalFtry) {
    $scope.producto = {
        'Nombre': '',
        'Costo': '0.00',
        'CostoUnitario': '0.00',
        'Precio': '0.00',
        'Rendimiento': '0.00',
        'Grasas': '0.00',
        'Proteinas': '0.00',
        'Calorias': '0.00',
        'Carbohidratos': '0.00',
        'Elaboracion': '',
        'IdCategoria': '1',
        'Porciones': '1',
        'Umbral': '20'
    };

    $scope.Insumos = [];

    ArticuloFtry.getAll().success(function (data) {
        $scope.listaArticulo = data;
        CategoriaFtry.getAll().success(function (data) {
            $scope.listaCategoria = data;
        });
    });

    $scope.open = function (size) {
        if(isNaN($scope.producto.Porciones)){
            return;
        }
        var modalInstance = $modal.open({
            templateUrl: 'modalContent.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
                items: function () {
                    return $scope.listaArticulo;
                }
            }
        });
        modalInstance.result.then(function (selectedItem) {
            //$scope.selected = selectedItem;
            NutricionalFtry.get(selectedItem.item.Id).success(function (data) {
                var nuevoIngrediente = {};
                nuevoIngrediente.IdArticulo = selectedItem.item.Id;
                nuevoIngrediente.nombre = selectedItem.item.Nombre;
                nuevoIngrediente.Cantidad = parseFloat(selectedItem.cantidad).toFixed(3);
                nuevoIngrediente.unidadMedida = selectedItem.item.UnidadMedida;
                nuevoIngrediente.Costo = (selectedItem.item.Costo).toFixed(2);
                nuevoIngrediente.Rendimiento = parseFloat(selectedItem.rendimiento).toFixed(2);
                nuevoIngrediente.importe = parseFloat((nuevoIngrediente.Cantidad/nuevoIngrediente.Rendimiento)* nuevoIngrediente.Costo).toFixed(2);
                nuevoIngrediente.calorias = parseFloat(data.Calorias * nuevoIngrediente.Cantidad);
                nuevoIngrediente.carbohidratos = parseFloat(data.Carbohidratos * nuevoIngrediente.Cantidad);
                nuevoIngrediente.grasas = parseFloat(data.Grasas * nuevoIngrediente.Cantidad);
                nuevoIngrediente.proteinas = parseFloat(data.Proteinas * nuevoIngrediente.Cantidad);
                $scope.Insumos.push(nuevoIngrediente);
                calcularCosto();
                calcularRendimientoNutricional();
            });
            
        }, function () {
            //$log.info('Modal dismissed at: ' + new Date());
        });
    };

    function calcularCosto(){
        var porciones = $scope.producto.Porciones;
        var costoTotal = parseFloat(0);
        var ingrediente;
        for (var idx = 0; idx < $scope.Insumos.length; idx++) {
            ingrediente = $scope.Insumos[idx];
            costoTotal += parseFloat(ingrediente.importe);
        }
        $scope.producto.Costo = parseFloat(costoTotal).toFixed(2);
        $scope.producto.CostoUnitario = parseFloat(costoTotal/porciones).toFixed(2);
        $scope.producto.Precio = parseFloat((costoTotal * 0.30) +  costoTotal).toFixed(2);
    }

    function calcularRendimientoNutricional(){
        var rendimientoTotal = parseFloat(0);
        var calorias = parseFloat(0);
        var carbohidratos = parseFloat(0);
        var grasas = parseFloat(0);
        var proteinas = parseFloat(0);
        var cantidadInsumos = $scope.Insumos.length;
        for (var idx = 0; idx < $scope.Insumos.length; idx++) {
            ingrediente = $scope.Insumos[idx];
            rendimientoTotal += parseFloat(ingrediente.Rendimiento);
            calorias += parseFloat(ingrediente.calorias);
            carbohidratos += parseFloat(ingrediente.carbohidratos);
            grasas += parseFloat(ingrediente.grasas);
            proteinas += parseFloat(ingrediente.proteinas);
        }
        $scope.producto.Calorias = parseFloat(calorias).toFixed(2);
        $scope.producto.Carbohidratos = parseFloat(carbohidratos).toFixed(2);
        $scope.producto.Grasas = parseFloat(grasas).toFixed(2);
        $scope.producto.Proteinas = parseFloat(proteinas).toFixed(2);
        $scope.producto.Rendimiento = parseFloat(rendimientoTotal / cantidadInsumos).toFixed(2);
    }

    $scope.grabar = function(){
        $scope.producto.Insumos = $scope.Insumos;
        ProductoFtry.create($scope.producto).success(function (data) {
            alert("Datos grabados");
            $state.go("app.producto");
        }).error(function (data) {

        });
    }
})