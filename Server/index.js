import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { db } from './db.js'
import router from './Routes/Auth.js'

db();
const app = express()
const port = 3000
app.use(express.json())
app.use('/auth',router)
app.use(morgan('dev'))
app.use(cors())


app.listen(port, () => console.log(`App started on port:${port}`))
