const mongoose = require('mongoose')

const conn = async() => {
    //conexao local
    //var bdlocal = await mongoose.connect('mongodb+srv://userAdmin:qweasdzxc1234@fiaptecnico.5oane.mongodb.net/crud')
    //conexao atlaas
    const atlas = await mongoose.connect('mongodb+srv://admin:admin123456@fiap-tecnico.dsp0j.mongodb.net/rulers')
}

module.exports = conn