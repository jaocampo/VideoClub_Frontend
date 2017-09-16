'use strict';

class NavbarController {
  //start-non-standard
constructor(authService) {
  this.authService = authService;
  this.isCollapsed = true;
}


  //end-non-standard


}

angular.module('startUpApp')
  .component('navbar',{
    templateUrl:'components/navbar/navbar.html',
    controller:NavbarController,
    controllerAs:'vm'
  });
