const book = require("../models/book");

var index = function (req, res) {
    book.find({
            titulo: new RegExp(req.query.titulo, 'i'),
            autor: new RegExp(req.query.autor, 'i')
        }, '_id titulo ano_publicacao autor')
        .skip(10 * req.query.page)
        .limit(10)
        .exec(function (err, books) {
            if (err) {
                res.json(err);
            }
            res.json(books);
        });
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
    show,
    create,
    update,
    destroy
};