var myApp = angular.module('tasksApp', ['tasks.services', 'firebase'])
   .constant('FIREBASE_URL', 'https://mailmemylist.firebaseio.com/');



myApp.controller('TasksController', ['$scope', '$rootScope', '$window', 'Authentication', '$timeout', '$firebaseAuth', 'FIREBASE_URL', 'sharedTasks',
  function($scope, $rootScope, $window, Authentication, $timeout, $firebaseAuth, FIREBASE_URL, sharedTasks) {
    var ref = new Firebase(FIREBASE_URL);
    var auth = $firebaseAuth(ref);

    $scope.addTask = function(taskText) {
     	console.log(taskText);

     	if (taskText) {
            var newTasksList = [
                    {
                        name: taskText
                    }
                ].concat(sharedTasks.getTasksList());
            sharedTasks.setTasksList(newTasksList);
        }
    }

    $scope.test = "hello";

    auth.$onAuth(function(authUser) {
    	if (authUser) {
      		$scope.firstname = sharedTasks.getFirstname();
      		$scope.lastname = sharedTasks.getLastname();

      		// console.log("firstname", $scope.firstname, "lastname", $scope.lastname);
    	}
  	})

  	$scope.login = function(email, password) {
      	console.log(email, "attempting login");
      	var user = {
        	'email': email,
        	'password': password
      	}
      	Authentication.login(user);
  	}; //login

}]); 

// first allow the user to login
// then allow the user to addTask simply through the chrome extension




// myApp.controller('AccountController', ['$scope', 'Authentication', 'sharedTasks', '$firebaseAuth', 'FIREBASE_URL', '$timeout',
//   function($scope, Authentication, sharedTasks, $firebaseAuth, FIREBASE_URL, $timeout) {
//   $scope.firstname;
//   $scope.lastname;

//   var ref = new Firebase(FIREBASE_URL);
//   var auth = $firebaseAuth(ref);

//   // $scope.showLoginContent = true;  
  



//   // $scope.logout = function() {
//   //   Authentication.logout();
//   // }; //logout

 



// }])
