'use strict';
  function paisService($resource,API){
    return $resource(API + '/api/paises/:id',{
      id:'@id'
    },{
      update:{
        method:'PUT'
      }
    });
  }
paisService.$inject = ['$resource', 'API'];
angular.module('startUpApp')
  .factory('paisService',paisService);
