app.controller('ModalInstanceCtrl', function($scope, $modalInstance, items) {
    $scope.items = items;
    $scope.selected = {
        item: $scope.items[0],
        cantidad: 1,
        rendimiento: 1
    };

    $scope.ok = function () {
        if((isNaN($scope.selected.cantidad) || $scope.selected.cantidad == 0) || 
            (isNaN($scope.selected.rendimiento) || $scope.selected.rendimiento == 0)){
            return;
        }else{
            $modalInstance.close($scope.selected);
        }
    };
    
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
    
    $scope.viewby = 5;
    $scope.totalItems = $scope.items.length;
    $scope.currentPage = 1;
    $scope.itemsPerPage = $scope.viewby;
    $scope.maxSize = 5; //Number of pager buttons to show
  
    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };
  
    $scope.pageChanged = function() {
        console.log('Page changed to: ' + $scope.currentPage);
    };
    
    $scope.setItemsPerPage = function(num) {
        $scope.itemsPerPage = num;
        $scope.currentPage = 1; //reset to first paghe
    }
})