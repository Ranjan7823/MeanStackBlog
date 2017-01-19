var express = require('express')
var swig  = require('swig');
var app = express()
var Blogs = require('../database/schema/blogSchema')
var swig_Template = require('../template/template_swig');

var BlogService = {}
BlogService.SaveBlog=function(req,res){
	console.log(req.body);
	var obj={
		name:req.session.user.name,
		Tittle:req.body.Tittle,
		Type:req.body.type,
		blogText:req.body.blogText
	}
	console.log(obj);
	var blogs = new Blogs(obj);
			blogs.save(function(err,data){
			if(err){
				//msg="Errors in Saving database"
				console.log("error in saving data");
					return;
			
			}
			console.log('data saved to db!');
			Blogs.find({name:req.session.user.name},function(err,blogs){
				if(err){
					console.log(err);
					return;
				}
				console.log(blogs)
				res.send(blogs);

			})
	
		});
			
}

BlogService.fetchBlog = function(req,res){
	Blogs.find({name:req.session.user.name},function(err,blogs){
				if(err){
					console.log(err);
					return;
				}
				//console.log(blogs)
				res.send(blogs);

			})

}
module.exports=BlogService;