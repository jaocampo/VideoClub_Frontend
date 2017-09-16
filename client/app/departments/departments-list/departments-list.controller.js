'use strict';
(function(){
  class DepartmentsListComponent {
    constructor(departmentsService) {
      this.departmentsService = departmentsService;
    }
    $onInit(){
      this.departmentsService.query().$promise
      .then(response => {
        console.log('DEPARTMENTS',response);
        this.departaments = response;
      })
      .catch(err => {
        console.log('ERROR', err);
      });
    }
  }
DepartmentsListComponent.$inject = ['departmentsService'];
angular.module('startUpApp')
  .component('departmentsList',{
    templateUrl:'app/departments/departments-list/departments-list.html',
    controller:DepartmentsListComponent,
    controllerAs:'vm'
  });

})();
