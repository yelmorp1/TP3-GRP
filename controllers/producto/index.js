app.controller('ProductoCtrl', function ($scope, ProductoFtry) {
    $scope.isLoading = true;
    $scope.showNoData = false;
    ProductoFtry.getAll().success(function (data) {
        $scope.listaProducto = data;
        $scope.isLoading = false;
        $scope.showNoData = false;
        $scope.totalItems = $scope.listaProducto.length;
    }).error(function(err){
        $scope.isLoading = false;
        $scope.showNoData = true;
    });

    $scope.eliminar = function(id){
        alert(id);
    }

    $scope.currentPage = 1;
    $scope.itemsPerPage = 10;
    $scope.maxSize = 5; //Number of pager buttons to show
})