var mongoose = require('../db_connection');

var commentSchema =  mongoose.Schema({
		blogId:{type:String},
		UserCommentname:{type:String},
		CommentText:{type:String},
		CommentsDate:{type:Date, default: Date.now}
	
})
var blogComment = mongoose.model('BlogComment',commentSchema)
module.exports = blogComment;