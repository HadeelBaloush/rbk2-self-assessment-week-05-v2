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
    return 0;

    // {
    //   count: 0,
    //   // addByOne: function(){
    //   //   count++;
    //   // }
    // }
  })
  .controller('fizzbuzzCtrl', function($scope, counter){
    $scope.display = '';
    $scope.increment = function(){
      counter++;
       $scope.display = 'FIZZ'
       console.log(counter, 'hhhhhhh')
      // if(counter%3 === 0){
      //   $scope.display = 'FIZZ';
      // }
      // else if(counter%5 === 0){
      //   $scope.display = 'BUZZ';
      // }
      // else if(counter%5 === 0 && counter%3 === 0){
      //   $scope.display = 'FIZZBUZZ';
      // }

      // .addByOne().then(function(){
      //   console.log('It is incremented by one');
      // });
    }
  })
  .controller('fozzbazzCtrl', function($scope, counter){
    $scope.display;

    $scope.increment = function(){
      counter++;
      if(counter%4 === 0){
        $scope.display = 'FOZZ';
      }
      if(counter%6 === 0){
        $scope.display = 'BAZZ';
      }
      if(counter%4 === 0 && counter%6 === 0){
        $scope.display = 'FOZZBAZZ';
      }
    }
  }).run();
