
var express =  require('express');
var app = express();
var authenticate = require('./models/authenticate');
var insert = require('./models/insert');
var upvote = require('./models/upvote');
var downvote = require('./models/downvote');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

app.use(cookieParser());
var expressSession = require('express-session');
app.use(expressSession({secret: '1',resave:false,saveUninitialized: true}));
var session;


app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
var session;
app.use(express.static('public'));

app.get('/',function(req,res){
	session = req.session
	console.log(session.id +" 888888asdas");
	if(session.id){
			res.redirect('/login')
	}else{
	
		res.sendFile('./public/views/index.html',{root:__dirname});
	}
	
});
app.get('/*',function(req,res){
	session = req.session
	//console.log(session.id);
	if(session.id){
		res.redirect('/login');
		console.log("in session")
	}else{
		res.redirect('/');
	}
});
app.post('/login',authenticate.authenticate);
app.post('/insert',insert.insert);
app.post('/upvote',upvote.upvote);
app.post('/downvote',downvote.downvote);
app.listen(process.env.PORT || 3000,function(err)
{
	if(err)
	{
		console.log(err);
		console.log("listen failed");
	}
	else{ console.log("listen on 3000 port");}
});