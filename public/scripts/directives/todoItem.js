angular.module('todo.directives.todoItem', [])
.directive('todoItem', function() {
  return {
    restrict: 'E',
    scope: {
      todo: "=",
      deleteTodo: "&"
    },
    templateUrl: "templates/directives/todoList.html",
    controller: function($scope) {
      console.log($scope.todo);
    }
  };
});
