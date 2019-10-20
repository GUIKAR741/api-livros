var mongoose = require('./../database/mongoose');


var capituloSchema = new mongoose.Schema({
    nome: String,
    conteudo: String
})

var bookSchema = new mongoose.Schema({
    titulo: String,
    ano_publicacao: Number,
    autor : String,
    capitulos: [
        capituloSchema
    ]
},{
    versionKey: false 
});

var book = mongoose.model('books', bookSchema);

module.exports = book;