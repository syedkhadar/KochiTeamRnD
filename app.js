var express = require('express'); 
var app = new express();
var port = 3001;

app.listen(port, function(err) {
	if (typeof(err) == "undefined") { 
		console.log('Your application is running on : ' + port + ' port');  
	}
});
//TEst
var articleRouter = express.Router();
var projectRouter = express.Router();
var booksRouter=express.Router();  
var contactRouter=express.Router();

app.use(express.static('public'));
//app.use(express.static('src/views'));

//Setting the template engine
app.set('views','./src/views');
app.set('view engine','ejs');

articleRouter.route("/");  
projectRouter.route("/");  
booksRouter.route("/");  
contactRouter.route("/");  

app.use('/articles',articleRouter);
app.use('/projects',projectRouter);  
app.use('/books',booksRouter);  
app.use('/contact',contactRouter);

var navMenu=[  
	{  
		href:'/articles',  
		text:'Articles'  
	},  
	{  
		href:'/projects',  
		text:'Projects'  
	},  
	{  
		href:'/books',  
		text:'Books'  
	},  
	{  
		href:'/Contact',  
		text:'Contact Us'  
	},  
];   

app.get('/',function(req,res){  
    res.render('index', {  
        title:'Node.js By Sourabh Somani',  
        menu:navMenu 
    });  
});

	app.get('/Test/', function(req, res) {  
	    res.render('./Test/newejs', {  
	        MyHeading: 'Test Application using Node.js',  
	        heading: 'Hello C# Corner, Welcome to Node.js Tutorial',  
	        foodItems: ['Pizza', 'Burger', 'Pasta']  
	    });  
	}); 
	

	articleRouter.route("/")  
    .get(function(req,res){  
        res.render('articles', {  
            title:'Articles',  
            menu:navMenu  
        });  
    }); 
 
	projectRouter.route("/")  
    .get(function(req,res){  
        res.render('projects', {  
            title:'Projects',  
            menu:navMenu  
        });  
	}); 

	booksRouter.route("/")  
    .get(function(req,res){  
        res.render('books', {  
            title:'Books',  
            menu:navMenu  
        });  
	}); 
	
	contactRouter.route("/")  
    .get(function(req,res){  
        res.render('contact', {  
            title:'Contact Us',  
            menu:navMenu  
        });  
    });  
