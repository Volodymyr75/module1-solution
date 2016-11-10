(function (){
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);
	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope) {
		$scope.name="";
		var comma = ",";
		function splitString(stringToSplit, separator) {
			var arrayOfStrings = stringToSplit.split(separator);
			return arrayOfStrings.length;
		}
	 
	 $scope.checking = function () {
	 	var lenghtString = splitString($scope.name, comma);
	 	if($scope.name.length == 0){
	 		$scope.check= "Please enter data first";
	 	}
	 	else if (lenghtString<=3){
	 		$scope.check= "Enjoy!";
	 		console.log(lenghtString);
	 	} else {
	 		$scope.check= "Too much!";
	 		console.log(lenghtString);
	 	}
 	
	 };
	 	}
		
	
})();

// (function () {
// 'use strict';

// angular.module('DIApp', [])
// .controller('DIController', DIController);

// DIController.$inject = ['$scope', '$filter'];
// function DIController($scope, $filter) {
//   $scope.name = "Yaakov";

//   $scope.upper = function () {
//     var upCase = $filter('uppercase');
//     $scope.name = upCase($scope.name);
//   };
// }

// })();
