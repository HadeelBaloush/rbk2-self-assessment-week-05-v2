angular.module('app', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
  .when('/fizzbuzz', {
    templateUrl: 'partials/fizzbuzz.html',
    controller: 'fizzbuzzCtrl'
  })
  .when('/fozzbazz', {
    templateUrl: 'partials/fozzbazz.html',
    controller: 'fozzbazzCtrl'
  })
  .otherwise({
    redirectTo: '/fizzbuzz'
  });
})
// DO NOT MODIFY CODE ABOVE THIS LINE

/*  HINT: Make sure your controllers, methods, and variables 
are named what $routeProvider and the partials are expecting  */

.factory('counter', function(){

  return {
    value: 0,
    addByOne: function(){
      value++;
    }
  }
})
.controller('fizzbuzzCtrl', function($scope, counter){
  $scope.display = '';
  $scope.increment = function(){
    counter.addByOne().then(function(){
      if(counter.value%3 === 0){
        console.log('dddddd')
        $scope.display = 'FIZZ';
      }
      else if(counter.value%5 === 0){
        $scope.display = 'BUZZ';
      }
      else if(counter.value%5 === 0 && counter.value%3 === 0){
        $scope.display = 'FIZZBUZZ';
      }

    })

  }
})
.controller('fozzbazzCtrl', function($scope, counter){
  $scope.display;

  $scope.increment = function(){
    counter.value++;
    if(counter.value%4 === 0){
      $scope.display = 'FOZZ';
    }
    if(counter.value%6 === 0){
      $scope.display = 'BAZZ';
    }
    if(counter.value%4 === 0 && counter.value%6 === 0){
      $scope.display = 'FOZZBAZZ';
    }
  }
});
