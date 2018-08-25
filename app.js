const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('tiny'));
// these static file paths are checked by express for files in specified order...
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/', (req, res) => {
  res.render('index', { title: 'MyLibrary', list: ['a', 'b'] });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  debug(chalk.green(`Listening for requests on port ${port}`));
});
