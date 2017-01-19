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
