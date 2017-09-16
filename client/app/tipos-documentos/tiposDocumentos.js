'use strict';

  angular.module('startUpApp')
    .config(function($stateProvider) {
      $stateProvider
      .state('tiposDocumentos-list',{
        url:'/tiposDocumentos-list',
        template:'<tiposDocumentos-list></tiposDocumentos-list>'
      });
    });
