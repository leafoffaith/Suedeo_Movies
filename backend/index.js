const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./models/test')) // will route it to

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
