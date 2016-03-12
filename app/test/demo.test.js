'use strict';

describe('angular-filterbox module', function() {

  beforeEach(module('angular-filterbox'));

  describe('controller controller', function(){
    var scope;
    beforeEach(angular.mock.inject(function($controller,$rootScope){
      scope = $rootScope.$new();
    }));

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('DemoCtrl',{$scope: scope});
        expect(view1Ctrl).toBeDefined();
    }));
  });
});