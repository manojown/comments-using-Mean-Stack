# comments Portal
Here you can comment and vote other poeple on those comments
# demo - <a>https://commentportal1.herokuapp.com/</a>

# what use
    1. Node.js 
    2. Angular.js
    3. Express.js
    4. MySql
    
 #database file
   link <a>https://drive.google.com/open?id=0B6cfp9VooPRVTlhhc0RGRDFxTWM</a>
   
  # process to use
  
      1. first user can enter his unique user name to enter in system 
      2. if user name is already there in database entry then get into or username 
             is not there then system created for you 
      3.you can comment your own comment
      4. you can vote other person comment <a>upvote </a> <a>downvote </a>
      
  #tables in mysql 
  
        1. users -                    fields|
                                            |_email
       
       2. comment_log -              fields|           (cid is primary key and email is foriegn key )
                                           |_cid
                                           |_email
                                           |_comment
                                           
      2. votes -                     fields|            (cid + email both combine primary key
                                           |_cid
                                           |_email
                                           |_flag   <a>upvote - 0  downvote - 1 </a>
                                           
