app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        

        // HOME STATES AND NESTED VIEWS ========================================
        .state('/', {
            url: '/home',
            templateUrl: '../../AngularDir/template/Home.html'
           // controller:'cntrlIndex'
        })
        .state('admin',{
            url:'/admin',
            templateUrl:'../../AngularDir/template/Admin.html'
        })
        .state('type', {
        url: '/type',
        
        templateUrl: '../../AngularDir/template/type.html'
        
    })
        /*.state('admin.list',{
            url:'/list',
            template:'hello',
            templateUrl:'../../AngularDir/template/Partial-List.html'
        })*/
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
            templateUrl:'../../AngularDir/template/blogDetail.html',
            controller:'CtrlGetSingleBlog'
        })
        
        
});