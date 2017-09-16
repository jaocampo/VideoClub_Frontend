'use strict';
(function(){

class UsuariosUpdateComponent {
  constructor(usuariosService,ciudadesService,departmentsService,$stateParams,$state) {
    this.usuariosService = usuariosService;
    this.ciudadesService = ciudadesService;
    this.departmentsService = departmentsService;
    this.$stateParams = $stateParams;
    this.$state = $state;
  }
  $onInit(){
    this.departmentsService.query().$promise
    .then(response => {
      console.log('DEPARATAMENTOS', response);
      this.departamentos = response;
    })
    .catch(err => console.log('ERROR',err));

    this.usuariosService.get({id:this.$stateParams.idUsuario}).$promise
      .then(response =>{
        console.log('Usuarios', response);
        this.usuarios = response;
      })
      .catch(err => console.error(err));

      this.ciudadesService.query().$promise
      .then(response => {
        console.log('CIUDADES OK', response);
        this.ciudadesList = response;
      })
      .catch(err => console.log('ERROR',err));

    }
    getCiudades(){
      this.ciudadesService.getCiudades({idDepartamento:this.idDepartamento}).$promise
      .then(response => {
        console.log('Ciudades',response);
        this.ciudades = response;
      })
      .catch(err => {
        console.log(err);
    });
  }
  updateUsuario(){
    this.usuariosService.update(({id:this.usuarios.id}),this.usuarios).$promise
    .then(response => {
      console.log('Usuario Actualizado',response);
      this.$state.go('usuarios-list');
    })
    .catch(err => console.error(err));
  }
}
UsuariosUpdateComponent.$inject = ['usuariosService','ciudadesService','departmentsService','$stateParams','$state'];
angular.module('startUpApp')
  .component('usuariosUpdate', {
    templateUrl: 'app/usuarios/usuarios-update/usuarios-update.html',
    controller: UsuariosUpdateComponent,
    controllerAs:'vm'
  });

})();
