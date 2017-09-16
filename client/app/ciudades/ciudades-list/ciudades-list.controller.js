'use strict';
(function(){

class CiudadesListComponent {
  constructor(ciudadesService) {
    this.ciudadesService = ciudadesService;//THIS.ciudadesList ES UNA VARIABLE Q ES IGUAL A LO QUE ESTA EN EL ARRAY DE CiudadesListComponent
  }
  $onInit(){
    this.ciudadesService.query().$promise
    .then(response => {
      console.log('CIUDADES',response);
      this.ciudades = response;
    })
    .catch(err => {
      console.log('ERROR',err);
    });
  }
}
CiudadesListComponent.$inject = ['ciudadesService'];
angular.module('startUpApp')
  .component('ciudadesList', {
    templateUrl: 'app/ciudades/ciudades-list/ciudades-list.html',
    controller: CiudadesListComponent,
    controllerAs: 'vm'
  });

})();
