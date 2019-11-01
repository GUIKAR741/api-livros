const express   = require("express");
const route     = express.Router();

const bookController = require('./controllers/bookController');
const chapterController = require("./controllers/chapterController");

route.get('/books',         bookController.index);
route.get('/books/paginate',bookController.paginate);
route.get('/books/:id',     bookController.show);
route.post('/books',        bookController.create);
route.put('/books/:id',     bookController.update);
route.delete('/books/:id',  bookController.destroy);

route.get('/books/:id_livro/chapters',          chapterController.index);
route.get('/books/:id_livro/chapters/:id',      chapterController.show);
route.post('/books/:id_livro/chapters',         chapterController.create);
route.put('/books/:id_livro/chapters/:id',      chapterController.update);
route.delete('/books/:id_livro/chapters/:id',   chapterController.destroy);


module.exports = route;