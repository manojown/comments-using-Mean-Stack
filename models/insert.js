var connection = require('./database');
var con = connection.con();
 


module.exports.insert = function(req,res)
{
		//console.log(req.body.user+" my user" + req.body.comment );
		var datainsert = {email:req.body.user,comment:req.body.comment};
		//var sql = "INSERT INTO comment_log (email,comment) VALUES ('"+req.body.user+"','"+req.body.comment+"')";
		//var s ;
		
		 con.query('INSERT INTO comment_log SET ?',datainsert, function(err, result) {

			if(err){
				var data = "fail"
				res.send(JSON.stringify(data));
			}else{
				res.send(JSON.stringify(data));
				}
			});
							
			
			
		
		

}