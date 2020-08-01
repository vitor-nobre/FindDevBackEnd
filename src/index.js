const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')
const http = require('http')
const { setupWebsocket } = require('./websocket')
const { createIndexes } = require('./models/Dev')

const app = express()
const server = http.Server(app)

setupWebsocket(server)

mongoose.connect('mongodb+srv://erbon8:erbon8@cluster0-knvep.mongodb.net/devDb?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,  
    useCreateIndex: true,
})

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3333)