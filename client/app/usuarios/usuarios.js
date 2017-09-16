'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('usuarios-list', {
        url: '/usuarios-list',
        template: '<usuarios-list></usuarios-list>'
      })
      .state('usuarios-update', {
        url: '/usuarios-update/:idUsuario',
        template: '<usuarios-update></usuarios-update>'
    })
    .state('usuarios-create', {
      url: '/usuarios-create',
      template: '<usuarios-create></usuarios-create>'
    });
  });
