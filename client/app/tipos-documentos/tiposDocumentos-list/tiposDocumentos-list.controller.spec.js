'use strict';

describe('Controller: TiposDocumentosListCtrl', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var TiposDocumentosListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TiposDocumentosListCtrl = $controller('TiposDocumentosListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
