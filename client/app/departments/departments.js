'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('departments-list', {
        url: '/departments-list',
        template:'<departments-list></departments-list>'
      });
  });
