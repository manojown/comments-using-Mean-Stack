var connection = require('./database');
var con = connection.con();
 


module.exports.downvote = function(req,res)
{
		console.log(req.body.cid+" my user" + req.body.user+" "+req.body.flag);
		var data;
		var sql = "INSERT INTO votes (cid ,email,flag) VALUES ("+req.body.cid+",'"+req.body.user+"',"+req.body.flag+") ON DUPLICATE KEY UPDATE flag=1";
		console.log(sql)
		 con.query(sql, function(err, result) {

			if(err){
				data = "success"
				res.send(JSON.stringify(data));
			}else{
				res.send(JSON.stringify(data));
			}
			});
		
			
			
		
		

}