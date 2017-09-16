'use strict';

describe('Component: CiudadesListComponent', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var CiudadesListComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    CiudadesListComponent = $componentController('CiudadesListComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
