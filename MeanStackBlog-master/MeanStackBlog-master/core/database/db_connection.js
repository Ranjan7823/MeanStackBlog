var mongoose=require("mongoose");
var dataBaseName='db';
mongoose.connect('mongodb://localhost/'+dataBaseName);
module.exports=mongoose;