var express = require('express')
var swig  = require('swig');
var app = express()
var Profile = require('../database/schema/profileSchema')
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
	profile.save(function(err,data){
		if(err){
			console.log('--profile err--'+err)
		}else{
			res.send(data);
		}
	})
}
profileService.getProfileDetail=function(req,res){
	Profile.findOne({name:req.session.user.name},function(err,data){

	})
}
module.exports=profileService;