# comments Portal
Here you can comment and vote other poeple on those comments
# demo - <a>http://comment123.herokuapp.com//</a>

# what use
    1. Node.js 
    2. Angular.js
    3. Express.js
    4. MySql
    
# database file
   link <a>https://drive.google.com/open?id=0B6cfp9VooPRVTlhhc0RGRDFxTWM</a>
   
# process to use
  
      1. first user can enter his unique user name to enter in system 
      2. if user name is already there in database entry then get into or username 
             is not there then system created for you 
      3.you can comment your own comment
      4. you can vote other person comment upvote or downvote 
      5.you can vote click on vote sybbol or cancle that vote  by double click on that button.
      
  #tables in mysql 
  
        1. users -                    fields|
                                            |_email    (email is primary)
       
       2. comment_log -              fields|           (cid is primary key and email is foriegn key )
                                           |_cid
                                           |_email
                                           |_comment
                                           
      2. votes -                     fields|            (cid + email both combine primary key
                                           |_cid
                                           |_email
                                           |_flag   upvote - 0  downvote - 1 
                                           
# IF heroku server issue than just download this repository and just run app on your system
    step 1 - go to project folder via cmd 
    step 2  - write command  <node index.js>
    step 3  - go to browser enter  local  http://localhost:3000/
                                           
