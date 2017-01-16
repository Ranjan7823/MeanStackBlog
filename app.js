var express = require('express')
var app = express()
var path = require("path");
var bodyParser = require('body-parser');
var LoginService = require('./core/service/loginService');
// session and cookies
var session = require('client-sessions');

app.use(bodyParser.urlencoded({ extended: true })); //body parser 
app.use(express.static(__dirname + '/public'));

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
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})