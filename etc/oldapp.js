var ski = angular.module('ski', ["ngRoute"]);
ski.controller('skiController', function($scope, $http){
  $scope.test1 = "its ok";

  $http.get('json/slider.json')
      .then(function(ichbinGluckyo){
         $scope.slides =ichbinGluckyo.data;
       });

  $http.get('json/gallery.json')
  .then(function(gal){
    $scope.gallery= gal.data.firstUser;
            });

  $http.get('json/tours.json')
    .then(function(torrrr){
      $scope.toursList = torrrr.data;
            });

//gallery
  //
  // $scope.gallPage = 1;
  // $scope.turnnPage = function(){
  //   if ($scope.gallPage <= 3){
  //     $scope.gallPage++;
  //     for (var ll = 12; ll<=60; ll++){
  //     $scope.arrr.push(ll)}
  //   } else {
  //     $scope.gallPage = 1;
  //     dd = 12;
  //   }
  //       scope.$apply();
  //       alert(dd);
  //
  // }

  $scope.arrr= [];
   for (var ii =2; ii<=60; ii++){
   $scope.arrr.push(ii);
   }

  $scope.arr6= [];
   for (var lll =1; lll<=6; lll++){
   $scope.arr6.push(lll);
   }

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


//sliderFromFolder

$scope.activeMenu ='main';

//mobileButton

$scope.showme=false;
$scope.showBut = function() {
  $scope.showme = !$scope.showme;
};

//openmapimage
$scope.openMap=false;
$scope.openMapF = function() {
$scope.openMap = !$scope.openMap;
};

}

);

//min scroll effect
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

//route
ski.config(function($routeProvider) {
    $routeProvider
    .when("/", {
          templateUrl : "template/main.htm"
    })
    .when("/blogs", {
        templateUrl : "template/blogs.htm"
    })
    .when("/northern", {
        templateUrl : "template/northern.htm"
    })
    .when("/all", {
        templateUrl : "template/tours.htm"
    })
    .when("/AragatsNS", {
        templateUrl : "template/Aragats_NS.htm"
    })
    .when("/EastSummitofMountAragats", {
        templateUrl : "template/EastSummitofMountAragats.htm"
    })
    .when("/Byurakan", {
        templateUrl : "template/Byurakan.htm"
    })
    .when("/westAragats", {
        templateUrl : "template/westAragats.htm"
    })
    .when("/bujakanMountain", {
        templateUrl : "template/bujakanMountain.htm"
    })
    .when("/hatis", {
        templateUrl : "template/hatis.htm"
    })
    .when("/araN", {
        templateUrl : "template/araN.htm"
    })
    .when("/southAra", {
        templateUrl : "template/southAra.htm"
    })
    .when("/southWestTeghenis", {
        templateUrl : "template/southWestTeghenis.htm"
    })
    .when("/teghenisEast", {
        templateUrl : "template/teghenisEast.htm"
    })
    .when("/vardenyats", {
        templateUrl : "template/vardenyats.htm"
    })
    .when("/vorotan", {
        templateUrl : "template/vorotan.htm"
    })
    .when("/Gluck",{
      templateUrl : "template/Gluck.htm"
    })
    .when("/contactUs",{
      templateUrl : "template/contactus.htm"
    })
    .when("/aboutus",{
      templateUrl : "template/about.htm"
    })
    .when("/blogs",{
      templateUrl : "template/blogs.htm"
    })
    .otherwise({
      templateUrl : "template/main.htm"
    })
});
