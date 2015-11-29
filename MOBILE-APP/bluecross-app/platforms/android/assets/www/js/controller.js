/* global angular, document, window */
'use strict';

angular.module('smartzone.controllers', ['ngCordova.plugins.localStorage','ionic.contrib.ui.cards'])

.controller('categoryController', function($scope, $stateParams, $ionicModal,$ionicLoading) {
	
	$scope.type = $stateParams.type;

	$scope.products = [];

	$scope.questions = [];

	$scope.count = 0;

	$scope.selected = [];

	$scope.choice = {};

	$scope.len = 0;

	switch($scope.type) {
		case "computers":
			$scope.questions = _.shuffle(laptop_questions);
			$scope.products  = _.shuffle(laptops);
			$scope.train     = laptop_trained;
			$scope.len       = $scope.questions.length;
			break;

		case "smartphone":
			$scope.questions = _.shuffle(smartphone_questions);
			$scope.products  = _.shuffle(smartphones);
			$scope.train     = smartphone_trained;
			$scope.len       = $scope.questions.length;
			break;

		case "books" :
			$scope.questions = _.shuffle(books_questions);
			$scope.products  = _.shuffle(books);
			$scope.train     = books_trained;
			$scope.len       = $scope.questions.length
	}

	$scope.selectChoice = function(c){
		$scope.choice = c;
	}

	$scope.nextCard = function(index) {

		$ionicLoading.show({
     	 	template: 'Loading...'
   		 });

		if(!_.isEmpty($scope.choice)) {
			$scope.questions.splice(index, 1);
			$scope.selected.push($scope.choice);
			$scope.count++;

			if($scope.count == $scope.len) {
				
				$(".lighten").removeClass('lighten');
				// CHOICE OVER, NOW DETERMINE THE PRODUCTS
				var aggregateData = _.map($scope.selected, function(s) {
					return _.values(s);
				})

				var keys = _.keys($scope.selected[0]);
				var total = [];

				var summedData = _.reduce(aggregateData, function(m,n) {
					total = [];
					for( var i = 0; i < m.length; i++)
					{
					    total.push(m[i]+n[i]);
					}
					return total;

				});

				var values = _.map(summedData, function(m){
					return m / $scope.len;
				});

				var finalData = _.object(keys,values);

				var net = new brain.NeuralNetwork();

				net.train($scope.train);

				var op = net.run(finalData);

				var arred = _.pairs(op);

				arred.sort(function(a,b) {
					return parseFloat(a[1]*10000) - parseFloat(b[1]*10000);
				});

				arred.reverse();

				console.log(arred)

				var results = _.map(arred, function(a) {
					return _.findWhere($scope.products, { name: a[0] })
				});

				$scope.products = _.reject(results, function(n) {
					return typeof n == "undefined";
				})

				$ionicLoading.hide();
			}
			$scope.choice = {};
			$ionicLoading.hide();
		}
		
	}
	

	$scope.modal = $ionicModal.fromTemplateUrl('views/view-product.html', {
     	scope: $scope,
     	animation: 'slide-in-up'
    }).then(function(modal) {
   		$scope.modal = modal;
  	});


	$scope.viewProduct = function(p) {
		$scope.modal.product = p;
		$scope.modal.quantity = 1;
  		$scope.modal.price = p.price;
  		$scope.modal.status = "ADD TO CART";
		$scope.modal.show()
	}

	$scope.hideProduct = function(quantity) {
  		$scope.modal.hide();
  	}

  	$scope.upQuantity = function() {
  		$scope.modal.quantity = $scope.modal.quantity + 1;
  		$scope.modal.price = $scope.modal.product.price * $scope.modal.quantity;
  	}


  	$scope.downQuantity = function() {

  		$scope.modal.quantity = ($scope.modal.quantity > 1) ? ( $scope.modal.quantity -= 1 )  : ( $scope.modal.quantity = 1 )
  		$scope.modal.price = $scope.modal.product.price * $scope.modal.quantity;
  	}

})

.controller('utils', function($scope, $location, $ionicHistory){

	$scope.go = function ( path ) {
	  if( path == 'back') {
	  	$ionicHistory.goBack();
	  }
	  else {
	  	$location.path( path );
	  }
	};

	
})

.controller('homeController', function($scope, $ionicPopup, $cordovaLocalStorage) {
	
	$scope.user = {};

	$scope.user.name = "";

	$scope.getName = function() {
			$ionicPopup.show({
		      template: '<input type="text" ng-model="user.name">',
		      title: 'Hi. Whats your name?',
		      subTitle: 'Please use normal things',
		      scope: $scope,
		      buttons: [
		        {
		          text: 'Save',
		          type: 'button-positive',
		          onTap: function(e) {
		            if (!$scope.user.name) {
		              //don't allow the user to close unless he enters name
		              e.preventDefault();
		            } else {
		            	console.log("SET :"+$scope.user.name)
		              return $cordovaLocalStorage.setItem('username',$scope.user.name);
		            }
		          }
		        }
		      ]
		    });		   
	}

	$scope.user.name = $cordovaLocalStorage.getItem('username');

	if(!$scope.user.name) {
		$scope.getName();
	}

})