var express = require('express')
var app = express()
var path = require("path");
var bodyParser = require('body-parser');
var LoginService = require('./core/service/loginService');
var BlogService = require('./core/service/blogService');
var profileService=require('./core/service/profileService');
// session and cookies
var session = require('client-sessions');

app.use(bodyParser.urlencoded({ extended: true })); //body parser 
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(session({
  cookieName: 'session',
  secret: 'eg[isfd-8yF9-7w2315df{}+Ijsli;;to8',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
  httpOnly: true,
  secure: true,
  ephemeral: true
}));

app.get('/',function(req,res){
	//swig_Template.pagesRendering(req,res);
	LoginService.firstPageRendering(req,res);
});
app.get('/login',function(req,res){
	LoginService.firstPageRendering(req,res);
})

app.get('/registration',function(req,res)
{
	LoginService.register(req,res);
})
app.get('/blogs',function(req,res)
{
	LoginService.renderDashboard(req,res);
				//res.sendFile(path.join(__dirname + '/Public/Views/blogs.html'));
})
app.get('/logout',function(req,res){
	LoginService.Logout(req,res);
})
app.post('/registration', function(req,res)
{
	LoginService.NewRegister(req,res);
})

app.post('/login',function(req,res){
	
	LoginService.login(req,res);

})

app.get('/profile',function(req,res){
	LoginService.renderProfile(req,res);
})
app.get('/fetchBlogsData',function(req,res){
				BlogService.fetchBlog(req,res);
		})
app.post('/NewBlogSave',function(req,res){
	console.log('---post---'+req.body);
	BlogService.SaveBlog(req,res);
})
app.get('/getAllBlog',function(req,res){
	BlogService.getAllBlogFun(req,res);
})
// profile service
app.post('/profileSave',function(req,res){

	profileService.saveProfileDetail(req,res);
})
app.get('/getProfile',function(req,res){
	profileService.getProfileDetail(req,res);
})
//-----------Blog Data
app.post('/getSingleBlogDetail',function(req,res){
	BlogService.singleBlogDetailById(req,res);
})
app.post('/SaveComment',function(req,res){
	console.log(req.body);
	BlogService.saveCommentBlog(req,res);
})
app.post('/fetchCommentBlogsDetail',function(req,res){
	BlogService.fetchCommentDetailBlog(req,res);
})
// admin blog
app.post('/updateBlogStatus',function(req,res){
	BlogService.updateStatusBlog(req,res);
})
app.post('/deleteBlog',function(req,res){
	BlogService.deleteBlog(req,res);
})
app.get('/userDetail',function(req,res){
	console.log('test admin'+req.session.user.name)
	res.send(req.session.user);
})
app.post('/addType',function(req,res){
	BlogService.SaveBlogType(req,res);
})
app.get('/getBlogType',function(req,res){
	BlogService.getType(req,res);
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})