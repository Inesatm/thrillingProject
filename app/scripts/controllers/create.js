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
      var newP = { "firstName":"", "lastName":"", "email":""}
      newP.firstName 	= $scope.person.FirstName;
      newP.lastName 	= $scope.person.lastName;
      newP.email 	= $scope.person.Mail;
      newP = JSON.stringify(newP);

      CreatePerson.save(newP);

      //update the person scope value
      $scope.person.Mail 	= "";
      $scope.person.FirstName		= "";
      $scope.person.lastName	= "";
    };

  }]);

/**
 * Factory to add a person
 */
angular.module('thrillingProjectApp').factory('CreatePerson', ['$resource', function($resource){
  return $resource("http://localhost:8080/person", {}, {
    'save': {
      method: 'POST',
      cache: false,
      isArray:false,
      headers:{'Content-Type':'application/json; charset=UTF-8'}
    }
  });
}]);
