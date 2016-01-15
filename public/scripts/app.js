var todo = angular.module('todo', ['ngRoute', "todo.directives.todoItem"]);

todo.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/home.html',
      controller: 'mainController'
    })
    .otherwise({redirectTo:'/'});
});
