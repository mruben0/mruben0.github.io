var ski = angular.module('ski', ['ngAnimate']);
ski.controller('skiController', function($scope, $http){
  $scope.test = 4;

  $scope.slides = [
    {image: 'images/img00.jpg', description: 'Image 00'},
    {image: 'images/img01.jpg', description: 'Image 01'},
    {image: 'images/img02.jpg', description: 'Image 02'}
];

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

});
