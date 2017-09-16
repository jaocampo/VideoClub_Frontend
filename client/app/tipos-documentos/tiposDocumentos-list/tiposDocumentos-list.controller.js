'use strict';
(function(){
  class tiposDocumentosListComponent {
    constructor(tiposDocumentosService) {
      this.tiposDocumentosService = tiposDocumentosService;
    }
    $onInit(){
      this.tiposDocumentosService.query().$promise
      .then(response => {
        console.log('DOCUMENTOS', response);
        this.documentos = response;
      })
      .catch(err => {
        console.log('ERROR', err);
      });
    }
  }
  tiposDocumentosListComponent.$inject = ['tiposDocumentosService'];
  angular.module('startUpApp')
  .component('tiposdocumentosList',{
    templateUrl:'app/tipos-documentos/tiposDocumentos-list/tiposDocumentos-list.html',
    controller: tiposDocumentosListComponent,
    controllerAs:'vm'
  });
})();
