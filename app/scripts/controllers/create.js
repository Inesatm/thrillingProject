'use strict';

/**
 * @ngdoc function
 * @name thrillingProjectApp.controller:CreateCtrl
 * @description
 * # CreateCtrl
 * Controller of the thrillingProjectApp
 */


angular.module('thrillingProjectApp')
  .controller('CreateCtrl',['$scope', 'CreatePerson', function ($scope,CreatePerson) {
    $scope.person 			= {};
    $scope.person.FirstName 	= "";
    $scope. person.lastName 	= "";
    $scope.person.Mail 	= "";
    /*
    * Called when the user click the create button
    * */
    $scope.create = function(){
      var newP = new CreatePerson();
      newP.FirstName 	= $scope.person.FirstName;
      newP.lastName 	= $scope.person.lastName;
      newP.Mail 	= $scope.person.Mail;

      console.log("waah", newP);

      newP.$save();

      // //update the person scope value
      $scope.person.email 	= "";
      $scope.person.firstName		= "";
      $scope.person.lastName	= "";
    };

  }]);

/**
 * Factory to add a person
 */
angular.module('thrillingProjectApp').factory('CreatePerson', ['$resource', function($resource){
  return $resource("http://localhost:8080/person", {}, {});
}]);
