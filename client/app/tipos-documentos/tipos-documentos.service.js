'use strict';
  function tiposDocumentosService($resource,API){
    return $resource(API + '/api/tipos_documentos/:id',{
      id:'@id'
    },{
      update:{
        method:'PUT'
      }
    });
  }
tiposDocumentosService.$inject = ['$resource', 'API'];
angular.module('startUpApp')
  .factory('tiposDocumentosService',tiposDocumentosService);
