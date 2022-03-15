// dependencies
const users = require('express').Router()
const db = require('../models')
const { User, Rental } = db
const { Op } =require('sequelize')

// find all users
users.get('/', async (req, res) => {
    try {
        const foundUser = await User.findAll({
            order: [ [ 'username', 'DESC' ] ],
            where: {
                username: { [Op.like]: `%${req.query.username ? req.query.username : ''}%` }
            }
        })
        res.status(200).json(foundUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

// find a specific movie by title
users.get('/:username', async (req, res) => {
    try {
        const foundUser = await User.findOne({
            where: { title: req.params.username },
            // to add if we want to change total due
            include: [
                { 
                    model: Rental, 
                    as: "rental", 
                },
            ],
            order: 
                [{ model: Movie, as: "movie" }, { model: Movie_Actor, as: "movie_actor" }, 'string', 'DESC']
        })
        res.status(200).json(foundUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

// create a user
users.post('/', async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new user',
            data: newUser
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// update a user
users.put('/:user_id', async (req, res) => {
    try {
        const updateUsers = await User.update(req.body, {
            where: {
                user_id: req.params.user_id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedUsers} user(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// delete a user
users.delete('/:user_id', async (req, res) => {
    try {
        const deletedUsers = await Band.destroy({
            where: {
                user_id: req.params.user_id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedUsers} user(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = users