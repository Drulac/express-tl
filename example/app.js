const express = require('express'),
	app = express(),
	tl = require('../')

app.engine('tl', tl)
app.set('views', './views') // specify the views directory
app.set('view engine', 'tl') // register the template engine

app.get('/', function(req, res) {
	res.render('index', {
		eat: ['apple', 'orange', 'carot'],
		sport: true
	})
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
