var swig  = require('swig');
var path = require("path");
var User = require('../database/schema/userSchema')

var swig_Template = require('../template/template_swig');

var LoginService = {}
// get login page
LoginService.firstPageRendering = function(req,res){
	var render = {};
	render.templateURL = './Public/Views/Login.html';
	render.data = {
		msg:""
	}
   swig_Template.compileHtml(render,function(err,data){
   	if(err){
   		console.log(err)
   		return;
   	}
   	res.send(data)
   })
   
}
// get registration page
LoginService.register = function(req,res){
	var render = {};
	render.templateURL = './Public/Views/Registration.html';
	render.data = {
		msg:"",
	}
	var name=req.body.username;
   swig_Template.compileHtml(render,function(err,data){
   	if(err){
   		console.log(err)
   		return;
   	}
   	res.send(data)
   })
}


// Resitration Save Data In Db

LoginService.NewRegister=function(req,res){
	var render={};
	render.templateURL='./Public/Views/Registration.html';
	var msg='';
	if(req.body.username!="" || req.body.password!="" || req.body.email){
		var obj = {
		name:req.body.username,
		password:req.body.password,
		email:req.body.email
		}
		var user = new User(obj);
		user.save(function(err,data){
		if(err){
			console.log("error in saving data");
			return;
		}

		console.log('data saved to db!',data);

		msg="save successfully";
		render.data = {
			msg:msg
		}
		swig_Template.compileHtml(render,function(err,data){
	   	if(err){
	   		console.log(err)
	   		return;
	   	}
	   	res.send(data)
   		})
		res.end();
	});
	}
	else
	{
		msg="all field are mandatory";
		render.data = {
			msg:msg
		}
		swig_Template.compileHtml(render,function(err,data){
	   	if(err){
	   		console.log(err)
	   		return;
	   	}
	   	res.send(data)
   		})
	}
}
LoginService.login = function(req,res){
	var render = {};
	render.templateURL = './Public/Views/Login.html';
//  fetch record from mongoDb
var msg='';
User.findOne({name:req.body.username},function(err,user){
	if(err){
		console.log(err);
		return;
	}
	
	console.log('---user---   '+  user)
		if(!user){
				
				 msg = "Invalid User Name";
				console.log(msg);
					render.data = {	
					msg:msg
					}
					swig_Template.compileHtml(render,function(err,data){
						if(err){
				 			console.log(err)
							return;
			   			}
			   			res.send(data)
					}) 
				}
			else if(user.password!=req.body.password){
				//render.templateURL = './Public/Views/Login.html';
				 msg = "Invalid Password";
				console.log(msg);
				render.data = {	
				msg:msg
				}
				swig_Template.compileHtml(render,function(err,data){
					if(err){
			 			console.log(err)
						return;
		   			}
		   			res.send(data)
				}) 
			}
			
		else
		{
			if(user.name==req.body.username  && user.password==req.body.password){
				console.log("sucess");
				res.redirect('/blogs');
			}
		}
	
	
})


	
}





module.exports = LoginService;