var connection = require('./database');
var con = connection.con();
 


module.exports.downvote = function(req,res)
{
		//console.log(req.body.cid+" my user" + req.body.user+" "+req.body.flag);
		var datainsert = {cid:req.body.cid,email:req.body.user,flag:req.body.flag};
		//var sql = "INSERT INTO votes (cid ,email,flag) VALUES ("+req.body.cid+",'"+req.body.user+"',"+req.body.flag+") ON DUPLICATE KEY UPDATE flag=1";
		//console.log(sql)
		var data;
		 con.query('INSERT INTO votes SET ? ON DUPLICATE KEY UPDATE flag=1',datainsert,function(err, result) {

			if(err){
				data = "fail"
				console.log("fail");
				res.send(JSON.stringify(data));
			}else{
				res.send(JSON.stringify(data));
			}
			});
		
			
			
		
		

}