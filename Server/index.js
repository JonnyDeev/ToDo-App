import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { db } from './db.js'

db();
const app = express()
const port = 3000
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`App started on port:${port}`))
