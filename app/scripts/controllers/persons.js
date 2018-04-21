'use strict';

/**
 * @ngdoc function
 * @name thrillingProjectApp.controller:PersonsCtrl
 * @description
 * # PersonsCtrl
 * Controller of the thrillingProjectApp
 */
angular.module('thrillingProjectApp')
  .controller('PersonsCtrl', ['$scope', 'getP', function ($scope, getP) {
    $scope.personnes = [];

    var listP = getP.query(function(){
      for(var i = 0; i < listP.length; i++){
        $scope.personnes.push({	 "prenom":listP[i]["firstName"],"nom": listP[i]["lastName"], "mail":listP[i]["email"]});
      }
    });
  }]);

/**
 * The factory to fetch all people
 */
angular.module('thrillingProjectApp').factory('getP', ['$resource', function($resource){
  return $resource("http://localhost:8080/person");
}]);
