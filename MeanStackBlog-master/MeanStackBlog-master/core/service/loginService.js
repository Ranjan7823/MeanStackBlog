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
  swig_Template.renderTemplate(render,res);
   
}
// get registration page
LoginService.register = function(req,res){
	var render = {};
	render.templateURL = './Public/Views/Registration.html';
	render.data = {
		msg:"",
	}
	var name=req.body.username;
   swig_Template.renderTemplate(render,res);
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
		swig_Template.renderTemplate(render,res);
		});
	}
	else
	{
		msg="all field are mandatory";
		render.data = {	
			msg:msg
		}
		swig_Template.renderTemplate(render,res);
		
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
	
	
		if(!user){
			msg = "Invalid User Name";
			console.log(msg);		
		} else if(user.password!=req.body.password){
				//render.templateURL = './Public/Views/Login.html';
				 msg = "Invalid Password";
				
		} else {
				req.session.user = user;

				console.log("sucess");
				res.redirect('/blogs');
				return;
		}

		render.data = {	
			msg:msg
		}
		swig_Template.renderTemplate(render,res);
		
	
	})
}

LoginService.renderDashboard=function(req,res){
	var render = {};
	render.templateURL = './Public/Views/blogs.html';
	//render.templateURL = './Public/AngularDir/template/index.html';


		 if (req.session && req.session.user){
		 		console.log(req.session.user);
		 }else{
		 	req.session.reset();
		        res.redirect('/login');
		 }

	render.data = {	
			username:req.session.user.name
		}
		console.log('--check :--'+render.data.username);
		swig_Template.renderTemplate(render,res);
}

/*LoginService.renderProfile=function(req,res){
	var render = {};
	render.templateURL = './Public/Views/profile.html';
		render.data = {	
			msg:""
		}
		swig_Template.renderTemplate(render,res);
}*/
LoginService.Logout=function(req,res){
	var render={};
	console.log('Logout');
	req.session.reset();
	res.redirect('/');
}
// blog save




module.exports = LoginService;