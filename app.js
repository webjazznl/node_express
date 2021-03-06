const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');

const nav = {
  title: 'MyLibrary',
  nav: [{ link: '/books', title: 'Books' },
    { link: '/authors', title: 'Authors' }],
};
const bookRouter = require('./src/routes/bookRoutes')(nav);

const app = express();
const port = process.env.PORT || 3000;


app.use(morgan('tiny'));
// these static file paths are checked by express for files in specified order...
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use('/books', bookRouter);
app.get('/', (req, res) => {
  res.render('index', nav);
});

app.listen(port, () => {
  debug(chalk.green(`Listening for requests on port ${port}`));
});
