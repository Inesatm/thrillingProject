'use strict';

/**
* @ngdoc function
* @name thrillingProjectApp.controller:CreateCtrl
* @description
* # CreateCtrl
* Controller of the thrillingProjectApp
*/


angular.module('thrillingProjectApp')
.controller('CreateCtrl',['$scope', 'CreatePerson', function ($scope, CreatePerson) {
  $scope.person 			= {};
  $scope.person.name		= "";
  $scope.person.surname 	= "";
  $scope.person.email 	= "";

  /*
  * Called when the user click the create button
  * */
  $scope.create = function(){
    var newP = new CreatePerson();
    newP.prenom 	= $scope.person.firstName;
    newP.nom 	= $scope.person.lastName;
    newP.email 	= $scope.person.email;

    console.log("waah", newP);

    newP.$save();

    //update the person scope value
    $scope.person.email 	= "";
    $scope.person.firstName		= "";
    $scope.person.lastName	= "";
  };
}]);

/**
* Factory to add a person
*/
angular.module('thrillingProjectApp').factory('CreatePerson', ['$resource', function($resource){
  return $resource("rest/person/create/", {}, {});
}]);
