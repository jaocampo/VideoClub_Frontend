'use strict';
(function(){
  class PaisListComponent {
    constructor(paisService) {
      this.paisService = paisService;
    }
    $onInit(){
      this.paisService.query().$promise
      .then(response => {
        console.log('PAISES', response);
        this.pais = response;
      })
      .catch(err => {
        console.log('ERROR', err);
      });
    }
  }
  PaisListComponent.$inject = ['paisService'];
  angular.module('startUpApp')
  .component('paisList',{
    templateUrl:'app/pais/pais-list/pais-list.html',
    controller: PaisListComponent,
    controllerAs:'vm'
  });
})();
