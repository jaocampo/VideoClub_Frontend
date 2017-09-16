'use strict';
(function(){

class UsuariosListComponent {
  constructor(usuariosService) {
    this.usuariosService = usuariosService;
  }
  $onInit(){
    this.usuariosService.query().$promise
    .then(response => {
      console.log('Usuarios OK',response);
      this.usuarios = response;
    })
    .catch(err => {
      console.log('ERROR',err);
    });
  }
}
UsuariosListComponent.$inject = ['usuariosService'];
angular.module('startUpApp')
  .component('usuariosList', {
    templateUrl: 'app/usuarios/usuarios-list/usuarios-list.html',
    controller: UsuariosListComponent,
    controllerAs:'vm'
  });

})();
