'use strict';

/**
 * @ngdoc overview
 * @name thrillingProjectApp
 * @description
 * # thrillingProjectApp
 *
 * Main module of the application.
 */
angular
  .module('thrillingProjectApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/create', {
        templateUrl: 'views/create.html',
        controller: 'CreateCtrl',
        controllerAs: 'create'
      })
      .when('/persons', {
        templateUrl: 'views/persons.html',
        controller: 'PersonsCtrl',
        controllerAs: 'persons'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
