var mongoose=require('../db_connection');

var BlogsSchema=mongoose.Schema({
	name:{type:String},
	Tittle:{type:String},
	Type:{type:String},
	blogText:{type:String},
	CreatedDate:{type:Date, default: Date.now},
	Comments:{type:String}
});
var Blogs=mongoose.model('blogs',BlogsSchema);
module.exports=Blogs;

