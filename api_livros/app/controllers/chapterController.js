var livro = require('../models/book');

var index = function(req, res){
    livro.findById(req.params.id_livro, 'capitulos._id capitulos.nome',function(err, results){
        if(err){
            res.status(400);
            res.json({
                error:err.message
            });
            res.end();
        }
        res.json(results.capitulos);
    });
}

var show = function(req, res){
    livro.findById(req.params.id_livro, function(err, results){
        var chapter = results.capitulos.id(req.params.id);
        res.json(chapter);
    });
}


var create = function(req, res){
    livro.findById(req.params.id_livro, function(err, results){
        if(err){
            res.status(400);
            res.end();
        }
        results.capitulos.push({nome:req.body.nome, conteudo: req.body.conteudo});
        results.save();
        res.status(201);
        res.end();
    });
}

var update = function(req, res){
    livro.findById(req.params.id_livro, function(err, results){
        var chapter = results.capitulos.id(req.params.id);
        chapter.nome = req.body.nome;
        chapter.conteudo = req.body.conteudo;

        results.save();

        res.status(200);
        res.end();
    });
}

var destroy = function(req, res){
    livro.findById(req.params.id_livro, function(err, results){
        var chapter = results.capitulos.id(req.params.id);
        chapter.remove();

        results.save();

        res.status(200);
        res.end();
    });
}


module.exports = {
    index,
    show,
    create,
    update,
    destroy
}