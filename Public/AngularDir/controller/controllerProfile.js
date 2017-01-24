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
app.controller('CtrlGetSingleBlog',function($scope,$http,$stateParams){
     
  console.log($stateParams.id);
  $scope.singleBlog={};
   $scope.singleBlogsDetail =function(){
    var url="/getSingleBlogDetail";
      var data={id:$stateParams.id};
      var config={
        header:{
          'Content-Type' : 'application/json'
        }
      }
      //console.log(data);
       $http.post(url,data,config)
       .success(function (data, status, header, config ){
        $scope.singleBlog = data;
        
        console.log(' single data ....'+$scope.singleBlog);
       })
       .error(function(data , status, header,config){
        console.log(data);
       })
   }
   $scope.singleBlogsDetail();

   // fet all comment
   $scope.commentdata={};
    $scope.fetchCommentBlogsDetail =function(){
    var url="/fetchCommentBlogsDetail";
      var data={id:$stateParams.id};
      var config={
        header:{
          'Content-Type' : 'application/json'
        }
      }
      //console.log(data);
       $http.post(url,data,config)
       .success(function (data, status, header, config ){
        $scope.commentdata = data;
        
        console.log('hjhhhhhhh---------'+data);
       })
       .error(function(data , status, header,config){
        console.log(data);
       })
   }
   $scope.fetchCommentBlogsDetail();

   //
console.log('id for save comment'+$stateParams.id);

  $scope.blogObj={};
   console.log('ang- data '+$scope.blogObj.CommentText)
  $scope.addComment=function(){

    var url='/SaveComment';
    var data={id:$stateParams.id,
      CommentText:$scope.blogObj.CommentText};
   console.log('hjadhajdhajdhajdhaj---'+data)
    var config={
      header:{
        'Content-Type' :'application/json'
      }
    }
    $http.post(url,data,config).success(
      function(data,status,header,config){
        console.log('--successs  '+data);
        $scope.blogObj=data;

    }).error(function(data,status,header,config){

    })
  }

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
