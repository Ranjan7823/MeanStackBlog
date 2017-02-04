app.controller('profileCntrl',function($scope){
	debugger;
	$scope.message="view Own Profile";	
})

app.controller('Cntrlprofile',function($scope,$http){
  $scope.profile={};
  debugger;
  $scope.getProfileFun=function(){
    $http.get('/profile/getProfile').success(function (data , status, header, config ){
        $scope.profile = data;
        console.log(data);
       })
       .error(function(data , status, header,config){
        console.log(data);
       })
  }
  $scope.getProfileFun();
  $scope.updateProfile=function(){
    //console.log($scope.profile);
    var url='/profile/profileSave';
    var data=$scope.profile;
    var config={
      header:{
          'Content-Type' : 'application/json'
        }
    }

    $http.post(url,data,config)
       .success(function (data , status, header, config ){
        $scope.profile = data;
        console.log(data);
       })
       .error(function(data , status, header,config){
        console.log(data);
       })
  }
})
