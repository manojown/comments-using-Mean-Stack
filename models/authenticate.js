var connection = require('./database');
var con = connection.con();
 

var session;
module.exports.authenticate = function(req,res)
{
		//console.log(req.body.user+" my user");
		var data={	
		
			user : req.body.user,
			comments :[]
			}
		var user = req.body.user;

		var sql = "select * from users where email ='"+user+"'";
		con.query(sql, function(error,rows)
					{
						if(!error && rows.length>0)
						{	
								session= req.session;
								session.id = user;
								
								var allcomment="SELECT comment_log.cid,comment_log.email,votes.flag,comment_log.comment,count(case flag when 0 then 1 else null end) as upvote,count(case flag when 1 then 1 else null end) as downvote FROM `votes` RIGHT OUTER JOIN comment_log ON votes.cid=comment_log.cid GROUP BY comment_log.cid DESC";
								con.query(allcomment, function(error,rows)
										{
											if(!error && rows.length>0)
											{	
													for(var i=0;i<rows.length;i++)
													{
															data.comments.push({cid:rows[i].cid,user:rows[i].email,comment:rows[i].comment,upvote:rows[i].upvote,downvote:rows[i].downvote});
													}
													res.send(JSON.stringify(data));
												 
											}else{
												

											}
											
										
										});
	

							 
						}else{
								var insertdata = {email:req.body.user};
								//var sql = "INSERT INTO users set ('"+req.body.user+"') ";
								console.log(sql)
								con.query('INSERT INTO users SET ?',insertdata, function(err, result) {

									if(err){

										data.message = "somthing went Wrong sorry"
										res.send(JSON.stringify(data));
									}else{
										data.message = "your account created  click on subscribe to get into your account"
										res.send(JSON.stringify(data));
									}
									});
		
			
						}
						
					
					});
	

}

							