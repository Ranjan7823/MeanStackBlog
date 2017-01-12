var express = require('express')
var app = express()
var path = require("path");
var bodyParser = require('body-parser');
var LoginService = require('./core/service/loginService');


app.use(bodyParser.urlencoded({ extended: true })); //body parser 
app.use(express.static(__dirname + '/public'));

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
app.get('/blogs', function(req,res)
{
	res.sendFile(path.join(__dirname + '/Public/Views/blogs.html'));

})
app.post('/registration', function(req,res)
{
	LoginService.NewRegister(req,res);
})

app.post('/login',function(req,res){
	
	LoginService.login(req,res);

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})