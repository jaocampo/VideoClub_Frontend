'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ciudades-list', {
        url: '/ciudades-list',
        template: '<ciudades-list></ciudades-list>'
      });
  });
