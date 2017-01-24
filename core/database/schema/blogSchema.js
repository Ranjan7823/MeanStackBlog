var mongoose=require('../db_connection');

var BlogsSchema=mongoose.Schema({
	name:{type:String},
	Tittle:{type:String},
	Type:{type:String},
	blogText:{type:String},
	CreatedDate:{type:Date, default: Date.now},
	isActive:{type:String,default:'pending'},
	Comments:{
		UserCommentname:{type:String},
		CommentText:{type:String},
		CommentsDate:{type:Date, default: Date.now}
	}
});
var Blogs=mongoose.model('blogs',BlogsSchema);
module.exports=Blogs;

