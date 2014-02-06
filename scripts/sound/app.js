// 'use strict';

var soundApp = angular.module('soundApp', [
  'ngRoute'
])
.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('<<').endSymbol('>>');
})
.controller('mainCtrl', function($scope) {
  $scope.performer = "@3600[.a,a,a,a:b,b,b,b:c,c,c,c|,c]";
  // $scope.performer = "";

})
.directive('visual', function($timeout) {
  return {
    restrict: 'E',
    scope: {
      part: '@'
    },
    // template: '<div class="simple"></div>',
    link: function(scope, el, attrs) {
      var part = scope.part;
      el.html(part);
      


      

      
          
      for (var i = 0; i < part.length; i++) {
        var t = part.charAt(i);
        if (t == '@') {
          console.log("@ at: " + i);
          var soundC = new buzz.sound( "/sounds/c", {
            formats: [ "mp3" ]
          });
          el.html(el.html().replace('@', '<span class="active">@</span>'))
          $timeout(soundC.play.bind(soundC), 1000);

        }
        else if ( !isNaN(parseInt(t)) ) {
          console.log("number: " + i);
          // $timeout(soundC.play(), 4000);
        }
        else if ( t == ':') {
          console.log("colon at: " + i);
          // $timeout(soundC.play(), 4000);
        }
        else if ( t == ',') {
          console.log("comma at: " + i);
        }
        else if ( t == 'a') {
          console.log("a at: " + i);
        }
        else if ( t == 'b') {
          console.log("b at: " + i);
        }
        else if ( t == 'c') {
          console.log("c at: " + i);
        }
      }

    }
  }
});


// soundApp.config(['$routeProvider',
//   function($routeProvider) {
//     $routeProvider
//       .when('/', {
//         templateUrl: '/main.html',
//         controller: 'mainCtrl'
//       })
//       .otherwise({
//         redirectTo: '/'
//       });
//   }]);
