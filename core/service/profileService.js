var express = require('express')
var swig  = require('swig');
var app = express()
var Profile = require('../database/schema/profileSchema')
var User = require('../database/schema/userSchema')
var swig_Template = require('../template/template_swig');

var profileService = {}
profileService.saveProfileDetail=function(req,res){
	var obj={
	name:req.session.user.name,
	dob:req.body.dob,
	mobile:req.body.mobile,
	email:req.session.user.email,
	password:req.session.user.password,
	profilePic:req.body.profilePic,
	gender:req.body.gender,
	};
	console.log(obj);
	//Profile.save
	var profile= new Profile(obj);
	/*profile.save(function(err,data){
		if(err){
			console.log('--profile err--'+err)
		}else{
			res.send(data);
		}
	})*/
	/*profile.findOneAndUpdate({name:req.session.user.name},obj,{upsert:true},function(err,doc){
		 if (err) return res.send(500, { error: err });
   			 return res.send("succesfully saved");
	})*/
	var query={name:req.session.user.name};

	Profile.update(query,{'$set': {mobile:req.body.mobile,dob:req.body.dob,gender:req.body.gender}},function(err,doc){
		if(err){
			console.log('--profile err--'+err)
		}else{
			console.log('Save profile');
			res.send(doc);
		}
	})
	/*profile.findOne({name:req.session.user.name},function(err,doc){
		if(err){
			console.log('--profile err--'+err)
		}
		else{
			doc=obj;
			doc.save(function(err,data){
				if(err){
					console.log('Save profile' +err);
				}
				else{
					console.log('Save profile');
					res.send();
				}
			})
		}
	})*/
}
profileService.getProfileDetail=function(req,res){
	console.log('-------session' + req.session.user.name)
	Profile.findOne({name:req.session.user.name},function(err,data){
		if(err){
			console.log('--Get Profile detail error'+err);
			return;
		}
		console.log('---Get Profile data' +data);
		res.send(data);

	})
}
module.exports=profileService;