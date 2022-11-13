const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')

const router = require('./routes/index.router')
const app = express()

app.use(cors({
    credentials: true,
    origin: '*'
    }
))

app.use(express.json())
app.use(router)

const PORT = process.env.PORT ?? 5000
const DbURL = process.env.DbURL

app.listen(PORT, async () => {
   try {
       await mongoose.connect(DbURL)
       console.log("Server started on port", PORT)
   } catch (e) {
       console.log(e)
   }
})