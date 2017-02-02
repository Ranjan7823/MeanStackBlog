var express = require('express')
var swig  = require('swig');
var app = express()
var Blogs = require('../database/schema/blogSchema')
var BlogsComment = require('../database/schema/blogCommentSchema')
var swig_Template = require('../template/template_swig');
var Types =  require('../database/schema/masterType')

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
			
			Blogs.find({name:req.session.user.name}).sort({_id:-1}).exec(function(err,blogs){
				if(err){
					console.log(err);
					return;
				}
				//console.log('--get user own blog-'+blogs)
				res.send(blogs);})
			

	
	//BlogService.fetchBlog ();
		});
			
}
BlogService.fetchCommentDetailBlog=function(req,res){
	BlogsComment.find({blogId:req.body.id}).sort({_id:-1}).exec(function(err,blogs){
				if(err){
					console.log(err);
					return;
				}
				//console.log('--get user own blog-'+blogs)
				res.send(blogs);})
}

BlogService.SaveBlogType=function(req,res){
	var obj={
		TypeName:req.body.TypeName
	}
	var types=new Types(obj);
	types.save(function(err,data){
		if(err){
			console.log(err);

		}console.log('save types');
		Types.find().sort({_id:-1}).exec(function(err,blogsType){
			res.send(blogsType)
		})
	})
}
BlogService.getType=function(req,res){
	Types.find().sort({_id:-1}).exec(function(err,blogsType){
			if(err)
			{

			}
			else{
				console.log(blogsType)
				res.send(blogsType)
			}
		})
}
// add commemt blog
BlogService.saveCommentBlog=function(req,res){
	var obj={
		blogId:req.body.id,
		UserCommentname:req.session.user.name,
		CommentText:req.body.CommentText
	}
	var blodscomment=new BlogsComment(obj);
	blodscomment.save(function(err,data){
		if(err){

		console.log("error in saving data");
					return;
			
			}
			console.log('data saved to db!');
			
			BlogsComment.find({blogId:req.body.id}).sort({_id:-1}).exec(function(err,blogs){
				if(err){
					console.log(err);
					return;
				}
				console.log('--Comment-'+blogs)
				res.send(blogs);})
	})
	/*var query={_id:req.body.id};
console.log('--------save comment id'+query._id);
	Blogs.update(query,{'$set': {"Comments.UserCommentname":req.session.user.name,"Comments.CommentText":req.body.CommentText}},function(err,doc){
		if(err){
			console.log('--profile err--'+err)
		}else{
			console.log('Save comment');
			Blogs.find({_id:req.body.id}).exec(function(err,blogs){
				if(err){
					console.log(err);
					return;
				}

				console.log('singleCommets--------------'+blogs)
				res.send(blogs);})
			//res.send(doc);
		}
	})*/
}

BlogService.fetchBlog = function(req,res){
	/*Blogs.find({name:req.session.user.name},function(err,blogs){
				if(err){
					console.log(err);
					return;
				}
				//console.log(blogs)
				res.send(blogs);

			})*/

Blogs.find({name:req.session.user.name}).sort({_id:-1}).exec(function(err,blogs){
				if(err){
					console.log(err);
					return;
				}
				//console.log('--get user own blog-'+blogs)
				res.send(blogs);})
			
}
BlogService.getAllBlogFun=function (req,res){
	Blogs.find().sort({_id:-1}).exec(function(err,blogs){
				if(err){
					console.log(err);
					return;
				}
				var obj={
					blogs:blogs,
					UserDetail:req.session.user.name

				}
				console.log('test for user'+req.session.user.name)
				res.send(blogs);})
}
BlogService.singleBlogDetailById = function(req, res){
	console.log('id pass'+req.body.id);

	Blogs.find({_id:req.body.id}).exec(function(err,blogs){
				if(err){
					console.log(err);
					return;
				}
				//console.log('------------------------singleBlogDetailById--------------'+blogs)
				res.send(blogs);})


		/*Blogs.findOne({_id:'588641e67d3ecc14f0f4581d'},function(err,singleblogs){
		if(err){
			console.log(err);
				return;
		}
 		
 		console.log('-single blog--'+singleblogs);
		res.send(singleblogs)
		
	})*/
}
BlogService.updateStatusBlog=function(req,res){
	console.log(req.body._id);
	var query={_id:req.body._id};

	Blogs.update(query,{'$set': {isActive:'confirm'}},function(err,doc){
		if(err){
			console.log(''+err)
		}else{
			
			Blogs.find().sort({_id:-1}).exec(function(err,blogs){
				if(err){
					console.log(err);
					return;
				}
				//console.log('--get user own blog-'+blogs)
				res.send(blogs);})

			
			//res.send(doc);
		}
	})
}
BlogService.deleteBlog=function(req,res){
	
	Blogs.remove({ _id:req.body._id},function(err, blogs){
		//Blogs.findOne({_id:req.body.id},function(err,blogs){
		if(err){
			console.log(err);
			return;
		}
	Blogs.find(function(err,blogs){
				if(err){
					console.log(err);
					return;
				}
				//console.log(blogs)
				res.send(blogs);

			})
	})
}


module.exports=BlogService;