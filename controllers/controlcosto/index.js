app.controller('controlCostoCtrl', function ($scope, controlCostoFtry) {
    $scope.isLoading = true;
    $scope.showNoData = false;
    controlCostoFtry.getAll().success(function (data) {
        $scope.listaSolicitudRetiro = data;
        $scope.isLoading = false;
        $scope.showNoData = false;
        console.log(data);
    }).error(function(err){
        $scope.isLoading = false;
        $scope.showNoData = true;
    });

    $scope.eliminar = function(id){
        alert(id);
    }
})