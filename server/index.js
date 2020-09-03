require('dotenv').config()
const express = require('express')
const massive = require('massive')
const productsCtrl = require('./controllers/products_controller')


const { SERVER_PORT, CONNECTION_STRING } = process.env

const app = express()
app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('DB Ready')
    app.listen(SERVER_PORT, () => console.log(`This app is using port: ${SERVER_PORT}`))
}).catch((error) => {
    console.log(error)
})

app.post('/api/products', productsCtrl.create)
app.get('/api/products', productsCtrl.getAll)
app.get('/api/products/:id', productsCtrl.getOne)
app.put('/api/products/:id', productsCtrl.update)
app.delete('/api/products/:id', productsCtrl.delete)


