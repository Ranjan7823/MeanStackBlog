var mongoose=require('../db_connection');
var UserSchema=mongoose.Schema({
	name:String,
	password:String,
	email:String
})
var User = mongoose.model('User',UserSchema)
module.exports = User;


