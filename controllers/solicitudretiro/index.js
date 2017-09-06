app.controller('SolicitudRetiroCtrl', function ($scope, SolicitudRetiroFtry) {
    $scope.isLoading = true;
    $scope.showNoData = false;
    SolicitudRetiroFtry.getAll().success(function (data) {
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