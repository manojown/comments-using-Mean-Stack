var connection = require('./database');
var con = connection.con();
 


module.exports.downvote = function(req,res)
{
		//  for  down vote
		var datainsert = {cid:req.body.cid,email:req.body.user,flag:req.body.flag};
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