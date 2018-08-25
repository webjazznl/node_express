const express = require('express');

const bookRouter = express.Router();

const books = [
  {
    title: 'War and Peace',
    genre: 'Historical Fiction',
    author: 'Tolstoy',
    read: false,
  },
  {
    title: 'Neet dat benauwde',
    genre: 'Comedy',
    author: 'Wierdense Revue',
    read: false,
  },
];

bookRouter.route('/')
  .get((req, res) => {
    res.render('books',
      {
        title: 'MyLibrary',
        nav: [{ link: '/books', title: 'Books' },
          { link: '/authors', title: 'Authors' }],
        books,
      });
  });

bookRouter.route('/:id')
  .get((req, res) => {
    const { id } = req.params;
    res.render('bookView',
      {
        title: 'MyLibrary',
        nav: [{ link: '/books', title: 'Books' },
          { link: '/authors', title: 'Authors' }],
        book: books[id],
      });
  });

module.exports = bookRouter;
