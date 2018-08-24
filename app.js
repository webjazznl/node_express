var express = require('express');
var debug = require('debug')('app');
var chalk = require('chalk');
var morgan = require('morgan');
var path = require('path');
var app = express();

app.use(morgan("tiny"));
//these static file paths are checked by express for files in specified order...
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

var port = 3000;
app.listen(port, function(){
    debug(chalk.green(`Listening on port ${port}`));
});
