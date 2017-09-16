'use strict';
function ciudadesService($resource,API){
  return $resource(API+'/api/ciudades/:id',{//ESTOS SON PARAMETROS Y SI QUIERO OTROS SE LES SEPARA POR COMA(,)
    id:'@id'
  },{
    update:{
      method:'PUT'
    },//LOS OBJETOS JSON SE IDENTIFICAN POR LAS LLAVES
    getCiudades : {//TRAE LAS CIUDADES AL SELECT EN LISTA
    url: API+'/api/ciudades/find',
    method:'GET',
    isArray:true
    }
  });
}
//ESTO DE AQUI ABAJO ES UN ARRAY
ciudadesService.$inject = ['$resource','API'];
angular.module('startUpApp')
  .factory('ciudadesService', ciudadesService);//SIEMPRE SE CAMBIA SERVICE POR FACTORY AL INICIAR ESTA DIRECTIVA
