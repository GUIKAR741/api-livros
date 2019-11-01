const book = require("../models/book");

var index = async function (req, res) {
    const livros = await book.find({}, '_id titulo ano_publicacao autor')
    res.json(livros)
}

var paginate = async function (req, res) {
    const { page = 1 } = req.query
    const livros = await book.paginate({}, { select: { _id: 1, titulo: 1, ano_publicacao: 1, autor: 1 }, page, limit: 10 })
    res.json(livros)
}

var show = function (req, res) {
    book.findById(req.params.id, '_id titulo ano_publicacao autor capitulos._id capitulos.nome').exec(function (err, book) {
        if (err) {
            res.status(400);
            res.end(err);
        } else if (book == null) {
            res.status(404);
            res.end();
        } else {
            res.json(book);
        }
    });
}

var create = function (req, res) {
    var b = new book({
        titulo: req.body.titulo,
        ano_publicacao: req.body.ano_publicacao,
        autor: req.body.autor
    });

    b.save();

    res.status(201);
    res.json({
        _id: b._id,
        titulo: b.titulo,
        ano_publicacao: b.ano_publicacao,
        autor: b.autor
    });
}

var update = function (req, res) {
    book.findByIdAndUpdate(req.params.id, {
        titulo: req.body.titulo,
        autor: req.body.autor,
        ano_publicacao: req.body.ano_publicacao
    }, function (err, resp) {


        if (resp == null) {
            res.status(404);
            res.end();
        } else if (err) {
            res.status(400);
            res.json(err);
        } else {
            res.status(200);
            res.end();
        }
    })
}

var destroy = function (req, res) {
    book.findByIdAndDelete(req.params.id, function (err, resp) {

        if (resp == null) {
            res.status(404);
            res.end();
        } else if (err) {
            res.status(400);
            res.end();
        } else {
            res.status(200);
            res.end();
        }
    });
}

module.exports = {
    index,
    paginate,
    show,
    create,
    update,
    destroy
};