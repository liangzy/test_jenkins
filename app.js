

	var koa = require('koa');
	var app = koa();
	
	app.use(function *(){
		this.body = "Hello World";
	});

	app.listen(3000,'0.0.0.0',function(){
	
		console.log('http run 3000');
	
	});

