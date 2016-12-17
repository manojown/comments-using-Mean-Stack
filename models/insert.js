var connection = require('./database');
var con = connection.con();
 


module.exports.insert = function(req,res)
{
		console.log(req.body.user+" my user" + req.body.comment );
		var data;
		var sql = "INSERT INTO comment_log (email,comment) VALUES ('"+req.body.user+"','"+req.body.comment+"')";
		var s ;
		 con.query(sql, function(err, result) {

			if(err){
				data = "success"
				res.send(JSON.stringify(data));
			}else{
				res.send(JSON.stringify(data));
			}
			});
		
			
			
		
		

}