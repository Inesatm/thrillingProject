'use strict';

/**
 * @ngdoc function
 * @name thrillingProjectApp.controller:PersonsCtrl
 * @description
 * PersonsCtrl
 * Controller of the thrillingProjectApp
 */
angular.module('thrillingProjectApp')
  .controller("PersonsCtrl",['$log','$http',function ($scope,$http,$log) {
    $http({
    method: 'GET',
    url: 'http://localhost:8080/person'
  }).then(function successCallback(response) {
    $scope.personsList = response.data;
  }, function errorCallback(response) {
    console.log("fail "+ response)
  });
    $scope.$log = $log;
  }]);


