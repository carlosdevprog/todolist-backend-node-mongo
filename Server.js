require('dotenv').config()

const cors = require('cors')

const express = require('express')
const mongoose = require('mongoose')


const app = express()

const routes = require('./routes/ToDoRoute')

app.use(express.json())
app.use(cors())

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log(`Conectado ao MongoDB 🍃`))
    .catch((error) => console.log(error))

app.use(routes)

app.listen({
    host: '0.0.0.0',
    port: process.env.PORT || 5000
})