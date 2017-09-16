'use strict';

describe('Controller: DepartmentsListCtrl', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var DepartmentsListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DepartmentsListCtrl = $controller('DepartmentsListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
