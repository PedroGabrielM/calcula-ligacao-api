const express =     require('express')
const mongoose =    require('mongoose')
const morgan =      require('morgan')
const bodyParse =   require('body-parser')

const ProdutoRoute =    require('./routes/produto')
const ChamadaRoute =    require('./routes/chamada')
const TarifaRoute =     require('./routes/tarifa')
const AuthRoute =       require('./routes/auth')
const Authenticate =    require('./middleware/authenticate')

mongoose.connect('mongodb://localhost:27017/calcula-ligacao', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database Conection Established')
})

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/api', AuthRoute)
app.use('/api/chamada', ChamadaRoute)
app.use('/api/produto', ProdutoRoute)
app.use('/api/tarifa', TarifaRoute)

app.use((req, res, next) => {
    const error = new Error('Não encontrado')
    error.status(404)
    next(erro)
});

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        erro: {
            mensagem: error.message 
        }
    });
});

module.exports = app