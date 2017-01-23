app.controller('profileCntrl',function($scope){
	debugger;
	$scope.message="view Own Profile";	
})
app.controller('CntrlBlog',function($scope,$http){
	$scope.blog={};
	 $scope.blogDetail=[];
    $scope.getAllBlogs=function(){
      $http.get('/fetchBlogsData')
      .success(function (data , status, header, config ){
        $scope.blogDetail = data;
        console.log(data);
       })
       .error(function(data , status, header,config){
        console.log(data);
       })

    }
    $scope.getAllBlogs();
	$scope.addBlog=function(){
		console.log($scope.blog);
		var url='/NewBlogSave';
		var data=$scope.blog;
		var config={
			header:{
    			'Content-Type' : 'application/json'
    		}
		}

 		$http.post(url,data,config)
       .success(function (data , status, header, config ){
        $scope.blogDetail = data;
       	console.log(data);
       })
       .error(function(data , status, header,config){
       	console.log(data);
       })

	}
})
app.controller('CtrlGetBlog',function($scope,$http){
      $http.get('/getAllBlog').success(function(data,status,header,config){
        $scope.blogData=data;
        console.log('----all Data' +$scope.blogData)

      }).error(function(data,status,header,config){
        console.log(data);
      })

});
app.controller('Cntrlprofile',function($scope,$http){
  $scope.profile={};
  debugger;
  $scope.getProfileFun=function(){
    $http.get('/getProfile').success(function (data , status, header, config ){
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
    var url='/profileSave';
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
app.controller('',function($scope,$http){
  $scope.blogComment={};
  $scope.GetBlogById=function () {
    $http.get('/getBlogById').success(function(data){
      $scope.blogDetail=data;
      console.log($scope.blogDetail);
    }).error(function(err){
      console.log(err);
    })
  }
})