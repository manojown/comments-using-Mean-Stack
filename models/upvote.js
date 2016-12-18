var connection = require('./database');
var con = connection.con();
 


module.exports.upvote = function(req,res)
{
	//for upvote
		var datainsert = {cid:req.body.cid,email:req.body.user,flag:req.body.flag};
		var data;

		 var sql = "select * from votes where email ='"+req.body.user+"' and cid="+req.body.cid+" and flag="+req.body.flag+"";
		console.log(sql);
		con.query(sql, function(error,rows)  // first check if user already upvote
					{
						
						if(!rows.length>0) 
						{	
							// if user request for upvote and user already downvote to that comment then update it
							 con.query('INSERT INTO votes SET ? ON DUPLICATE KEY UPDATE flag=0',datainsert,function(err, result) {
							 		console.log(result);
									if(err){
										data = "fail"
										console.log("fail");
										res.send(JSON.stringify(data));
									}else{

										res.send(JSON.stringify(data));
									}
								});
						}else{

							// user have already upvote so delete to database as user request
							var sqld="DELETE FROM votes where email='"+req.body.user+"' and cid="+req.body.cid+"";
							con.query(sqld, function(error,rows){
								console.log(sqld);
									if(error){
										data = "fail"
										console.log("fail");
										res.send(JSON.stringify(data));
									}else{

										res.send(JSON.stringify(data));
									}
								});

							
						}

			
					});
			
			
		
		

}