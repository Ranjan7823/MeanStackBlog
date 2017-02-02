var app = angular.module("myApp", ["ui.router"]);


app.controller('scotchController', function($scope) {
    
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];
   
    
});
app.controller('paragraph',function($scope){
        $scope.message='Paragragh text will come sooon'

})
/*app.config(function($routeProvider) {
	 $routeProvider
    .when("/", {
    	templateUrl : "../../AngularDir/template/Home.html"
       	//templateUrl : "./template/Home.html"
    })
    .when("/profile", {
    	templateUrl : "../../AngularDir/template/Profile.html",
    	controller:'profileCntrl',
         //template : "<h1>About</h1><About"
    })
    .when("/AddNewBlog", {
    	templateUrl : "../../AngularDir/template/NewBlogAdd.html",
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });

})*/
