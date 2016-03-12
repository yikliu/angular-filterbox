(function(){
    'use strict';

    angular.module('angular-filterbox')
        .directive('filterbox', ['treefy', function(treefy){
            return {
                templateUrl: './directives/filterbox.html',
                restricted: 'E',
                scope: {
                    ngModel: '=',
                    tree:'@',
                    depth:'@'
                },
                controller: ['$scope', 'treefy', function($scope, treefy) {
                    $scope.initialize = function(flatten){
                        var i = 0;
                        var treefied = treefy.DoTreefy(flatten);
                        $scope.depth = treefied.depth;
                        $scope.tree = treefied.tree;
                        $scope.levels = [];
                        for (;i < $scope.depth; i++){
                            $scope.levels[i] = {
                                level : i,
                                names : [],
                                selected : "Level " + i
                            };
                        }
                        $scope.levels[0].names = _.pluck($scope.tree, 'name');
                    };
                    $scope.path = "";
                    $scope.level_selected = function (level, name){
                        var cur = $scope.tree;
                        var i = 0;
                        var j = 0;
                        var path = "";
                        var nextLevel = level + 1;

                        $scope.levels[level].selected = name;

                        for (; i <= level; i++){
                            cur = _.find(cur, function(obj){
                                return obj.name === $scope.levels[i].selected;
                            }).children;

                            path = path + $scope.levels[i].selected + " > ";
                        }

                        $scope.path = path.slice(0, -3);

                        if(nextLevel >= $scope.levels.length)
                            return;

                        $scope.levels[nextLevel].names = _.pluck(cur, 'name');
                        $scope.levels[nextLevel].selected = "Level " + nextLevel;

                        //clear deeper levels
                        if($scope.depth > nextLevel){
                            for (j = nextLevel + 1; j < $scope.depth; j++){
                                $scope.levels[j].names = [];
                                $scope.levels[j].selected = "Level " + j;
                            }
                        }
                    };
                }],

                link: function(scope, iElement, iAttrs, ctrl) {
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
                    scope.initialize(flat);
                }
            };
        }]);
})();

