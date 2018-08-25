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

function router(nav) {
  bookRouter.route('/')
    .get((req, res) => {
      res.render('books',
        {
          title: 'MyLibrary',
          nav,
          books,
        });
    });

  bookRouter.route('/:id')
    .get((req, res) => {
      const { id } = req.params;
      res.render('bookView',
        {
          title: 'MyLibrary',
          nav,
          book: books[id],
        });
    });
  return bookRouter;
}

module.exports = router;
