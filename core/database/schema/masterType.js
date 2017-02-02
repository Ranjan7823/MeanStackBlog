var mongoose=require('../db_connection');

var BlogType=mongoose.Schema({
	TypeName:{type:String},
	CreatedDate:{type:Date,default:Date.now}
})

var Types=mongoose.model('Types',BlogType);
module.exports=Types;