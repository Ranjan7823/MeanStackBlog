var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
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

})
