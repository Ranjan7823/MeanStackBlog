app.controller('CntrlBlog',function($scope,$http){
	$scope.blog={};
	 $scope.blogDetail=[];
    $scope.getAllBlogs=function(){
      $http.get('/blogs/fetchBlogsData')
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
		var url='/blogs/NewBlogSave';
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
      $http.get('/blogs/getAllBlog').success(function(data,status,header,config){
        $scope.blogData=data;
        console.log('new Object' +$scope.blogData)

      }).error(function(data,status,header,config){
        console.log(data);
      })

});
app.controller('CtrlGetSingleBlog',function($scope,$http,$stateParams){
     
  console.log($stateParams.id);
  $scope.singleBlog={};
   $scope.singleBlogsDetail =function(){
    var url="/blogs/getSingleBlogDetail";
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
      debugger;
    var url="/blogs/fetchCommentBlogsDetail";
      var data={id:$stateParams.id};
      var config={
        header:{
          'Content-Type' : 'application/json'
        }
      }
      //console.log(data);
       $http.post(url,data,config)
       .success(function (data, status, header, config ){
        debugger;
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

    var url='/blogs/SaveComment';
    var data={id:$stateParams.id,
      CommentText:$scope.blogObj.CommentText};
   
    var config={
      header:{
        'Content-Type' :'application/json'
      }
    }
    $http.post(url,data,config).success(
      function(data,status,header,config){
        console.log('--successs  '+data);
        $scope.commentdata=data;

    }).error(function(data,status,header,config){

    })
  }

});