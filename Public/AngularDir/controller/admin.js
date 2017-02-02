app.controller('CntrlAdmin',function($scope,$http){
	$scope.blogData={};
      $http.get('/getAllBlog').success(function(data,status,header,config){
        $scope.blogData=data;
        console.log('----all Data' +$scope.blogData)

      }).error(function(data,status,header,config){
        console.log(data);
      });



      // 
      
      $scope.updateStatus=function(id){
		debugger;

		var id=id;
		console.log(id);
		var url='/updateBlogStatus';
		var data={"_id":id};
		console.log(data);
		var config={
			header:{
          'Content-Type' : 'application/json'
			}
		};
      	$http.post(url,data,config).success(function(data){
        $scope.blogData=data;
      	})
      	.error(function(data,status,header,config){
        console.log(data);
      });
      }
      $scope.deleteBlog=function(id){
        debugger;
      	var url='/deleteBlog';
      	console.log('----'+id)
      	var data={"_id":id};
      	var config={
      		header:{
      			'Content-Type':'application/json'
      		}
      	};
      	$http.post(url,data,config).success(function(data){
      		$scope.blogData=data;

      	}).error(function(data,status,header,config){
        console.log(data);
      });
      }

});
app.controller('cntrlIndex',function($scope,$http){
  $scope.UserSetail={};
  debugger;
 
    $http.get('/userDetail').success(function (data, status, header, config ){
        $scope.UserSetail = data;
        console.log('new user'+ $scope.UserSetail);
       })
       .error(function(data , status, header,config){
        console.log(data);
       })
  
  //$scope.getProfileFun();

})
app.controller('cntrlType',function($scope,$http){
  debugger;
  $scope.Type={};
  $scope.AddType=function(){
    var url='/addType';
    var data= {
      TypeName:$scope.Type.TypeName
    };
    console.log(data);
    var config={
          header:{
            'Content-Type':'application/json'

          }
    };
    $http.post(url,data,config).success(function(data,status,header,cong){
      $scope.Type=data;
      console.log($scope.Type)
    }).error(function(data,status,header,config){
      console.log(data);
    })

  }

  $scope.GetType=function(){
    debugger;
    $http.get('/getBlogType').success(function (data, status, header, config ){
        $scope.Type = data;
        console.log('hgshdgshdgshd'+data)
       })
       .error(function(data , status, header,config){
        console.log(data);
       })
  }
   $scope.GetType();
})
