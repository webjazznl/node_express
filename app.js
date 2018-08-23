var express = require('express');
var debug = require('debug')('app');
var chalk = require('chalk');
var morgan = require('morgan');
var path = require('path');
var app = express();

app.use(morgan("tiny"));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

var port = 3000;
app.listen(port, function(){
    debug(chalk.green(`Listening on port ${port}`));
});
