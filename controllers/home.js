app.controller('HomeCtrl', function ($scope,) {
    $scope.load = function () {
        $('.flexslider').flexslider({
            touch: true,
            pauseOnAction: false,
            pauseOnHover: false,
        });
    }
})