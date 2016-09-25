var shaman = angular.module('shaman', []);
shaman.controller('shcontr', function($scope, $http){
  $scope.ind = 1;

  $scope.pagePrev = function(index,ind, inn){
if ($scope.ind === 1){
  $scope.ind=2;
} else { $scope.ind = 1;
}
    $http.get('posts/posts'+$scope.ind+'.json')
        .then(function(yo){
           $scope.posts = yo.data;
         });
};
$http.get('posts/posts'+$scope.ind+'.json')
    .then(function(yo){
       $scope.posts = yo.data;
     });


  $scope.bro = {
    age:3,
    name: "bro",
    id: "broCode",
    text: "Bro was originally an abbreviated form of \"brother\" but began to assume non-familial connotations in the 20th century.[2] In this evolution, it was first used to refer to another man, such as a \"guy\" or \"fellow\", or sometimes, specifically, a black man. In these ways, it was semantically similar to the use of \"brother\". In the 1970s, bro came to refer to a male friend rather than just another man. The word became associated with young men, \"conventional guys' guys\" who spend time partying in ways similar to each other. Oxford Dictionaries identified the use of the term \"bro\" as the one \"defining feature\" of the changing cultural attributes of young manhood"
  };

  //clock

  $scope.clock = new Date();
  var secondd = function(){
    $scope.clock = new Date();
    $scope.minSec= 60 - $scope.clock;
  };
  setInterval (function(){
  $scope.$apply(secondd);
  }, 1000);
  secondd();

//todo
$scope.todos = ["DO OR", "NOT TO DO"];
$scope.addTodo = function(){
if ($scope.todos.indexOf($scope.addNew) == -1)
{  $scope.todos.push($scope.addNew);
   $scope.errText="Ok, it has added, bro"
} else {$scope.errText="Error: Bro, you have added the same thing twice"}}

//links


  $scope.links = [
    { lin: "https://www.fb.com",
    name: "SfatBook"
  },
  {   lin: "https://www.google.com",
      name: "bigBro"
  },
  {   lin: "https://www.google.com",
      name: "bigBro"
  }
    ];

$scope.comment ={
  text: ""
};

//count
$scope.count= 3;
$scope.count2= 1;

$scope.ccc = function(index){
$scope.count++
};
$scope.cccc = function(index){
$scope.count = 1;
$scope.count2 = Math.floor((Math.random() * 10) + 1);
if ($scope.count2 >= 4) {
$scope.shtoyik = "more"}
else ($scope.shtoyik = "less")
}
});
