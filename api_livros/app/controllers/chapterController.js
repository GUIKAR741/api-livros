var livro = require('../models/book');

var index = function(req, res){
    livro.findById(req.params.id_livro, 'capitulos._id capitulos.nome',function(err, results){

        if(results == null){
            res.status(404);
            res.end();
        }else if(err){
            res.status(400);
            res.end();
        }else{
            res.json(results.capitulos);
        }
    });
}

var show = function(req, res){
    livro.findById(req.params.id_livro, function(err, results){

        if(results == null) {
            res.status(404);
            res.end();
        }else {

            var chapter = results.capitulos.id(req.params.id);

            if(chapter == null) {
                res.status(404);
                res.end();
            }else {
                res.json(chapter);
            }

        }
    });
}


var create = function(req, res){
    livro.findById(req.params.id_livro, function(err, results){
        if(results == null ){
            res.status(404);
            res.end();
        }else if(err){
            res.status(400);
            res.end();
        }else{  
            results.capitulos.push({nome:req.body.nome, conteudo: req.body.conteudo});
            results.save();
            res.status(201);
            res.end();
        }
    });
}

var update = function(req, res){
    livro.findById(req.params.id_livro, function(err, results){
        if(results == null){
            res.status(404);
            res.end();
        }else{

                   
            var chapter = results.capitulos.id(req.params.id);

            if(chapter == null) {
                res.status(404);
                res.end();
            }else{
                chapter.nome = req.body.nome;
                chapter.conteudo = req.body.conteudo;
                
                results.save();
                
                res.status(200);
                res.end();
            }
    
        }
    });
}

var destroy = function(req, res){
    livro.findById(req.params.id_livro, function(err, results){

        if(results == null){
            res.status(404);
            res.end();
        }else{
              
            var chapter = results.capitulos.id(req.params.id);

            if(chapter == null) {
                res.status(404);
                res.end();
            }else{
                chapter.remove();
            
            
                results.save();
                
                res.status(200);
                res.end();
            }
           
        }
    });
}


module.exports = {
    index,
    show,
    create,
    update,
    destroy
}