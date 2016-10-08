var ski = angular.module('ski', ['ngAnimate']);
ski.controller('skiController', function($scope, $http){
  $scope.test = 4;


  $http.get('json/slider.json')
      .then(function(yo){
         $scope.slides = yo.data;
       });

//   $scope.slides = [
//     {image: 'images/img00.jpg'},
//     {image: 'images/img01.jpg'},
//     {image: 'images/img02.jpg'}
// ];

$scope.currentIndex = 0;
    $scope.setCurrentSlideIndex = function (index) {
        $scope.currentIndex = index;
    };
$scope.isCurrentSlideIndex = function (index) {
        return $scope.currentIndex === index;
    };

$scope.prevSlide = function () {
        $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
    };

$scope.nextSlide = function () {
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
    };
$scope.activeMenu ='main'
});

ski.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
             if (this.pageYOffset > 50) {
                 scope.ChangeClass = true;
               } else {
                 scope.ChangeClass = false;
             }
            scope.$apply();
        });
    };
});
