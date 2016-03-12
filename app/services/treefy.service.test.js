'use strict';

describe('angular-filterbox module', function() {
    var treefyService;
    var treefied;

    var flat =
        [
            "Org > Marketing > Marketing Team A",
            "Org > Marketing > Marketing Team B",
            "Org > Sales > Territories > Territory A > Sales Team A1",
            "Org > Sales > Territories > Territory A > Sales Team A2",
            "Org > Sales > Territories > Territory B > Sales Team B1",
            "Org > Sales > Territories > Territory B > Sales Team B2",
            "Org > Customer Service",
            "COM > Test "
        ];

    beforeEach(module('angular-filterbox'));

    beforeEach(inject(function (_treefy_) {
        treefyService = _treefy_;
        treefied = treefyService.DoTreefy(flat);
    }));

    describe('treefy service', function(){

        it('returns correct depth', inject(function() {
            expect(treefied.depth).toBe(5);
        }));

        it('has two 1st level names ', function(){
            var names = _.pluck(treefied.tree, 'name');
            expect(names.length).toBe(2);
            expect(names[0]).toBe('Org');
            expect(names[1]).toBe('COM');
        });

        it('Org has 3 2nd level names', function(){
           var org = _.find(treefied.tree, function(elem){
               return elem.name === 'Org';
           });

            var names = _.pluck(org.children, 'name');
            expect(names.length).toBe(3);
        });

        it('COM has 1 2nd level names', function(){
            var com = _.find(treefied.tree, function(elem){
                return elem.name === 'COM';
            });

            var names = _.pluck(com.children, 'name');
            expect(names.length).toBe(1);
        })
    });
});