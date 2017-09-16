'use strict';

describe('Controller: PaisListCtrl', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var PaisListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PaisListCtrl = $controller('PaisListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
