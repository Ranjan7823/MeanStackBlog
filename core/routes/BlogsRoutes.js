var express = require('express')
var Blogrouter = express.Router();
var path = require("path");
var BlogService = require('../service/blogService.js');
//var BlogService = require('./core/service/blogService');
Blogrouter.use(function(req,res,next){
	console.log('Test Middleware');
	next();
})
Blogrouter.get('/fetchBlogsData',BlogService.fetchBlog);
Blogrouter.get('/getAllBlog',BlogService.getAllBlogFun);

Blogrouter.post('/NewBlogSave',BlogService.SaveBlog);
Blogrouter.post('/addType',BlogService.SaveBlogType);
Blogrouter.get('/getBlogType',BlogService.getType);// admin
Blogrouter.post('/getSingleBlogDetail',BlogService.singleBlogDetailById);
Blogrouter.post('/SaveComment',BlogService.saveCommentBlog);
Blogrouter.post('/fetchCommentBlogsDetail',BlogService.fetchCommentDetailBlog);
Blogrouter.post('/updateBlogStatus',BlogService.updateStatusBlog);
Blogrouter.post('/deleteBlog',BlogService.deleteBlog);

/*Blogrouter.get('/profile',BlogService.renderProfile);
app.get('/profile',function(req,res){
	LoginService.renderProfile(req,res);
})*/

module.exports = Blogrouter;
