
angular.module('bluecross', ['ionic','bluecross.controllers','ngCordova.plugins.localStorage'])

.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('index', {
                url: '/home',
                templateUrl: 'views/home.html',
                controller: 'homeController'
            })

            .state('category', {
                url: '/category/:type',
                templateUrl: 'views/category.html',
                controller: 'categoryController'
            })

            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html'
            })
          
        $urlRouterProvider.otherwise("/home");

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
