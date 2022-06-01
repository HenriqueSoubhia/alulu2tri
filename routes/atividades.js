module.exports = (app) => {
    app.post('/atividades', async (req, res) => {
        let dados = req.body
        //return console.log(dados)

        // conectar com o database
        const database = require("../config/database")()

        //importar o model atividades
        const atividades = require("../models/atividades")

        //gravar as infomações do formulario no database
        let gravar = await new atividades({
            data: dados.data,
            tipo: dados.tipo,
            entrega: dados.entrega,
            disciplina: dados.disciplina,
            intrucoes: dados.orientacoes,
            usuario: dados.id,
            titulo: dados.titulo
        }).save()
        //buscar as atividades do usuario
        let buscar = await atividades.find({ usuario: dados.id })

        //recarrega a página atividades
        res.render('atividades.ejs', {
            nome: dados.nome,
            id: dados.id,
            lista: buscar
        })
    }
    )
}
