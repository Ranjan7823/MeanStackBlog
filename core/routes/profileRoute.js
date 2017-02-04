var express = require('express')
var Profilerouter = express.Router();
var path = require("path");
var ProfileService = require('../service/profileService.js');
//var BlogService = require('./core/service/blogService');
Profilerouter.use(function(req,res,next){
	console.log('Test profile');
	next();
})
Profilerouter.get('/getProfile',ProfileService.getProfileDetail);
Profilerouter.post('/profileSave',ProfileService.saveProfileDetail);
module.exports = Profilerouter;

/*app.post('/profileSave',function(req,res){

	profileService.saveProfileDetail(req,res);
})
app.get('/getProfile',function(req,res){
	profileService.getProfileDetail(req,res);
})*/