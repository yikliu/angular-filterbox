
'use strict';

describe('directive: filterbox', function() {
    var element, scope;

    beforeEach(module('angular-filterbox'));
    beforeEach(module('tpl/filterbox.html'));

    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new();
        element =
            "<filterbox></filterbox>";

        element = $compile(element)(scope);
        scope.$digest();
    }));

    it('should applied template', function () {
        expect(element.html()).not.toEqual('');
    });

    it('it should have 5 buttons', function(){
        var buttons = element.find('button');
        expect(buttons[0]).toBeDefined();
        expect(buttons.length).toBe(5);
    });

    it('first box contains', function() {
        var box0 = element.find('div#box_0');
        expect(box0.eq(0).text()).toContain('Org');
        expect(box0.eq(0).text()).toContain('COM');
    });

    it('second box contains no valid data at start', function(){
        var box1 = element.find('div#box_1');
        expect(box1.eq(0).text()).not.toContain('Sales');
    })
});
