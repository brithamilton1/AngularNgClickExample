 var app = angular.module('myModule', []);
 app.controller('myController', function($scope){
    $scope.toDo = ['workout', 'go to work', 'read'];
    $scope.addToDo = function (add) {
          $scope.toDo.push(add);
          $scope.add='';
        }
    });
