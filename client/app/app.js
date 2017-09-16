'use strict';

angular.module('startUpApp', [
  'startUpApp.constants',
   'ngCookies',
   'ngResource',
   'ngSanitize',
   'ui.router',
   'ui.bootstrap',
   'satellizer',
  ])
  .constant('API','http://localhost:8080/VideoClub_Backend')
  //Estructura para la configuracion de satellizer
  .config(function(API, $authProvider){
    $authProvider.loginUrl = API + '/api/auth/login';
    $authProvider.tokenName = 'token';
    $authProvider.tokenPrefix = 'startUpApp';//Nombre alusivo a la aplicacion
  })
  // fin de la estructura satellizer
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
    .otherwise('/');
    $locationProvider.html5Mode(true);
  });
