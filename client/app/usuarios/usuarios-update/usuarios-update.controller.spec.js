'use strict';

describe('Controller: UsuariosUpdateCtrl', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var UsuariosUpdateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsuariosUpdateCtrl = $controller('UsuariosUpdateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
