/*
    construct tree structure from flat data
 */
(function() {
    'use strict';

    angular.module('angular-filterbox')
        .factory('treefy', function(){
            var service = {
                DoTreefy : doTreefy
            };
            return service;

            function doTreefy(flatten){
                var depth = 0;
                var max_depth = 0;
                var tree = [];
                var line_array = [];

                flatten.forEach(function(line){
                    line_array = line.split('>');
                    line_array = _.map(line_array, function(elem){
                       return elem.trim();
                    });
                    depth = line_array.length;
                    max_depth = Math.max(depth, max_depth);
                    _parseOneLine(line_array, tree);
                });
                return {
                    tree : tree,
                    depth : max_depth
                }
            }

            function _parseOneLine (line_array, root){
                var currentArray = root;
                var childObj = {};
                line_array.forEach(function(element){
                    childObj = _findItemByName(currentArray, element);
                    if(!childObj){
                        childObj = {name: element, children:[]};
                        currentArray.push(childObj);
                    }
                    currentArray = childObj.children;
                });
            }

            function _findItemByName (array, target){
                return _.find(array, function(e){ return e.name === target;});
            }
        });
})();