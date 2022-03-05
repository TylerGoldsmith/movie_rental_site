// dependencies
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')


// controllers

// config and middleware
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// root
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'This is the root application'
    })
})

// listen
app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`)
})