'use strict'

const express = require('express')
const path = require('path')
const volleyball = require('volleyball')
const { db } = require('./models/db')
const PORT = 7890

const app = express()

// logging middleware
app.use(volleyball)

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// static middleware
app.use(express.static(path.join(__dirname, '../public')))

app.use('/api', require('./api')) // include our routes!

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

db.sync()
.then(() => {
    app.listen(PORT, () => console.log(`studiously serving silly sounds on port ${PORT}`))
})

module.exports = app
