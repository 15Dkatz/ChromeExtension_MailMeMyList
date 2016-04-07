var myApp = angular.module('tasksApp', ['firebase'])
   .constant('FIREBASE_URL', 'https://mailmemylist.firebaseio.com/');


myApp.controller('TasksController', ['$scope', '$rootScope', '$window', 'Authentication', '$timeout', '$firebaseAuth', 'FIREBASE_URL',
  function($scope, $rootScope, $window, Authentication, $timeout, $firebaseAuth, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL);
    var auth = $firebaseAuth(ref);

    $scope.addTask = function(taskText) {
     	console.log(taskText);
    }

    $scope.test = "hello";

}]); 