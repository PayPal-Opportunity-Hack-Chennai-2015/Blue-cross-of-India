var app = angular.module('BlueCrossApp',['ui.router', 'BlueCrossApp.controllers', 'BlueCrossApp.services']);

app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

    .state('init', {
        url: '/',
        controller: 'initController'
    })

    .state('login', {
    	url: '/login',
    	controller: 'loginController',
    	templateUrl: 'views/login.html'
    })

    .state('dashboard', {
        url: '/dashboard',
        controller: 'dashboardController',
        templateUrl: 'views/dashboard.html'
    })

    $urlRouterProvider.otherwise("/");
});