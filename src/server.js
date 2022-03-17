// dependencies
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')


// controllers
const actors_controller = require('./controllers/actors_controller')
app.use('/actors', actors_controller)
const movies_controller = require('./controllers/movies_controller')
app.use('/movies', movies_controller)
const usersController = require('./controllers/users_controller')
app.use('/users', usersController)

// config and middleware
require("dotenv").config({ path: `../.env` }); 
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