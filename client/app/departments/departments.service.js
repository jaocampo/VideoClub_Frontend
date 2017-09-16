'use strict';
function departmentsService($resource,API){
  return $resource(API+'/api/departamentos/:id',{
    id:'@id'
  },{
    update:{
      method:'PUT'
    }
  });
}
departmentsService.$inject = ['$resource','API'];
angular.module('startUpApp')
  .factory('departmentsService', departmentsService);
