var express = require('express');
var chalk = require('chalk');

var app = express();

app.get("/", function(req, res) {
    res.send("Hello from lib app");
});

var port = 3000;
app.listen(port, function(){
    console.log(chalk.green(`Listening on port ${port}...`));
});
