'use strict';

/**
 * Controller of the homework5App
 */

angular.module('homework5App')
  .controller('MainCtrl', ['$http', function($http){
    var main = this;
  	$http.get('scripts/controllers/tutorials.json').success(function(data){
      main.tutInfo=data;
    });
  }]);