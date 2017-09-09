app.controller('controlCostoCtrl', function ($scope, controlCostoFtry,filterFilter) {
    $scope.isLoading = true;
    $scope.showNoData = false;
    controlCostoFtry.getAll().success(function (data) {
        $scope.alertaLista = data;
        $scope.isLoading = false;
        $scope.showNoData = false;
        $scope.items = $scope.alertaLista;
        console.log(data);
    }).error(function(err){
        $scope.isLoading = false;
        $scope.showNoData = true;
    });

    $scope.eliminar = function(id){
        alert(id);
    }

    $scope.busqueda = {
        nombre: ''
    };

    $scope.buscar = function () {
        $scope.alertaLista = filterFilter($scope.items, {Nombre: $scope.busqueda.nombre});
        console.log($scope.busqueda.nombre);
        console.log($scope.alertaLista);
    };

})