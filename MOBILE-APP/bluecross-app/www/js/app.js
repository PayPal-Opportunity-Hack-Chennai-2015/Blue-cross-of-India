
angular.module('bluecross', ['ionic','bluecross.controllers', 'ngCordova.plugins.localStorage'])

.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('index', {
                url: '/home',
                templateUrl: 'views/home.html',
                controller: 'homeController'
            })

            .state('register', {
                url: '/register',
                templateUrl: 'views/register.html',
                controller: 'caseController'
            })

            .state('ambulance_assigned', {
                url: '/ambulance_assigned',
                templateUrl: 'views/ambulance_assigned.html',
                controller : 'ambulanceController'
            })

            .state('ambulance_not_assigned', {
                url: '/ambulance_not_assigned',
                templateUrl: 'views/ambulance_not_assigned.html'
            })

            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html'
            })
          
        $urlRouterProvider.otherwise("/home");

    })

.directive('file', function () {
    return {
        scope: {
            file: '='
        },
        link: function (scope, el, attrs) {
            el.bind('change', function (event) {
                var file = event.target.files[0];
                scope.file = file ? file : undefined;
                scope.$apply();
            });
        }
    };
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
