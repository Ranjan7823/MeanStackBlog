var app = angular.module("myApp", ["ui.router"]);
app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('/', {
            url: '/home',
            templateUrl: '../../AngularDir/template/Home.html'
        })
        .state('profile', {
            url: '/profile',
            views: {
                '': { templateUrl: '../../AngularDir/template/Profile.html' }
            }
            
        })
        .state('AddNewBlog',{
            url:'/AddNewBlog',
            templateUrl:'../../AngularDir/template/NewBlogAdd.html',
            //controller:'scotchController'
        })
        
        // nested list with custom controller


        /*.state('home.list', {
            url: '/list',
            templateUrl: 'partial-home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })
        
        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })*/
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        
        
        .state('blogDetail',{
            url:'/blog/:id',
            templateUrl:'../../AngularDir/template/blogDetail.html'
        })
        
        
});

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
