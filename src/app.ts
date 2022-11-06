require('dotenv').config()
import express from 'express'
import config from 'config'
import router from './router'
import db from '../config/db'

const app = express()
const port = config.get<number>('port')

app.use(express.json())
app.use('/api/', router)

app.listen(port, async () => {
    await db()

    return console.log(`App rodando na porta ${port}`)
})