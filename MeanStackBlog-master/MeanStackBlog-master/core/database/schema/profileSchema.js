var  mongoose=require('../db_connection');
var profileSchema=mongoose.Schema({
	name:{type:String, min: 5, max: 50},
	dob:{type:Date,default:Date.now},
	mobile:{type:Number,minlength: 5, maxlength: 15},
	isActive:{type:Boolean,default:true},
	createdDate:{type:Date,default:Date.now},
	email:{type:String},
	password:{type:String,min:3,max:30},
	profilePic:{data: Buffer, contentType: String},
	gender:{type:String}
});
var profile=mongoose.model('profiles',profileSchema);
module.exports=profile;