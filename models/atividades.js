const mongoose = require('mongoose')

const modelo = mongoose.Schema({
    data: Date,
    tipo: String,
    entrega: String,
    disciplina: String,
    instrucoes: String,
    usuario : String,
    enviado: { type: Date, default: Date.now }
})

const atividades = mongoose.model('atividades', modelo)

module.exports = atividades