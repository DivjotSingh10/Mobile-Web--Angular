var app = angular.module('myApp', []);

app.controller('angController', function($scope) {
  $scope.divId = "1";
  $scope.buttonClickCounter = 0;
  $scope.reset = function() {
    $scope.user = angular.copy($scope.master);
  };
  $scope.reset();
  
  $scope.navigateTo = function(id){
	  
	 
	  $scope.divId = id;
	  $('.rightDiv').stop(true,true).animate({scrollTop:'0px'});
  }
  
  document.getElementById("data-binding-code").innerText = `<div ng-app="">

  <p>Name : <input type="text" ng-model="namingModel" /></p>

  <h1>Hello { namingModel }</h1>

</div>
`;

document.getElementById("example4-code").innerText = `<form name="myForm">

  <input name="myEmail" ng-model="myEmail" type="email" />

</form>

<p>Is the email valid? { myForm.myEmail.$valid }</p>`;

  $scope.counterButtonClick = function(){
	  $scope.buttonClickCounter = $scope.buttonClickCounter + 1;
  }
});