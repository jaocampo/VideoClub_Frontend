'use strict';
(function() {

class UsuariosCreateComponent {
  constructor(usuariosService, ciudadesService, departmentsService, $state) {
    this.usuariosService = usuariosService;
    this.ciudadesService = ciudadesService;
    this.departmentsService = departmentsService;
    this.$state = $state;
    this.showValidaDocumento = false;
  }
  $onInit() {
    this.departmentsService.query().$promise
    .then(response => {
      console.log('DEPARTAMENTOS',response);
      this.departamentos = response;
    })
    .catch(err => {
      console.log('ERROR',err);
    });
    this.usuariosService.query().$promise
    .then(response => {
      console.log('USUARIO OK',response);
      this.usuariosList = response;
    })
    .catch(err => {
      console.log('ERROR',err);
    });
    this.ciudadesService.query().$promise
    .then(response => {
      console.log('CIUDADES OK',response);
        this.ciudadesList = response;
    })
    .catch(err => {
      console.log('ERROR',err);
    });
  }
  //Metodo para encontrar las ciudades por id
  getCiudades() {
    console.log(this.idDepartamento);
    this.ciudadesService.getCiudades({idDepartamento:this.idDepartamento}).$promise
    .then(response => {
      console.log('Ciudades', response);
      this.ciudades = response;
    })
    .catch(err => console.error(err));
  }

  createUsuario() {
    this.usuarios.activo = 1;
    console.log(this.usuarios);
    this.usuariosService.save(this.usuarios).$promise
    .then(response => {
      console.log('CREATE OK',response);
      this.$state.go('usuarios-list');
    })
    .catch(err => {
      console.log('ERROR',err);
    });
  }
//Metodo para validar el numero de documento ingresado.
showValidarDocumento() {
  this.usuariosService.query({numDocumento:this.usuarios.numDocumento}).$promise
    .then(response => {
      console.log('Valida',response);
      this.showValidaDocumento = true;
      if (response.length === 0) {
        this.showValidaDocumento = false;
      }
    })
    .catch(err => {
      console.log('Err', err);
    });
  }
}
UsuariosCreateComponent.$inject = ['usuariosService','ciudadesService','departmentsService',
'$state'];
angular.module('startUpApp')
  .component('usuariosCreate', {
    templateUrl: 'app/usuarios/usuarios-create/usuarios-create.html',
    controller: UsuariosCreateComponent,
    controllerAs:'vm'
  });

})();
