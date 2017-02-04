var express = require('express')
var Userrouter = express.Router();
var UserService = require('../service/loginService.js');

Userrouter.use(function(req,res,next){
console.log('User Login and Reg');
	next();
})
Userrouter.get('/',UserService.firstPageRendering);
Userrouter.get('/login',UserService.firstPageRendering);
Userrouter.get('/registration',UserService.register);
Userrouter.get('/blogs',UserService.renderDashboard);
Userrouter.get('/logout',UserService.Logout);
Userrouter.post('/registration',UserService.NewRegister);
Userrouter.post('/login',UserService.login);

/*app.get('/',function(req,res){
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

})*/

module.exports=Userrouter;
