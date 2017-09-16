'use strict';

describe('Service: departments', function () {

  // load the service's module
  beforeEach(module('startUpApp'));

  // instantiate service
  var departments;
  beforeEach(inject(function (_departments_) {
    departments = _departments_;
  }));

  it('should do something', function () {
    expect(!!departments).to.be.true;
  });

});
