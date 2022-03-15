// dependencies
const actors = require('express').Router()
const db = require('../models')
const { Actor, Movie } = db
const { Op } = require('sequelize')

// find all actors by name
actors.get('/', async (req, res) => {
    try {
        const foundActors = await Actor.findAll({
            order: [['name', 'DESC']],
            where: {
                title: { [Op.like]: `%${req.query.title ? req.query.title : ''}%` }
            }
        })
        res.status(200).json(foundActors)
    } catch (error) {
        res.status(500).json(error)
    }
})

// find a specific actor by name
actors.get('/:actor_id', async (req, res) => {
    try {
        const foundActors = await Actor.findOne({
            where: { name: req.params.name },
            attributes: { exclude: ["actor_id"] },
            include: [
                {
                    model: Movie_Actor,
                    as: "movie_actor",
                    attributes: { exclude: ["actor_id", "movie_id", "movie_actor_id"] },
                    include: {
                        model: Movie,
                        as: "movie",
                        attributes: { exclude: ["actor_id"] }
                    }
                },
            ],
        })
        res.status(200).json(foundActors)
    } catch (error) {
        res.status(500).json(error)
    }
})

// create an actor
actors.post('/', async (req, res) => {
    try {
        const newActor = await Actor.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new actor',
            data: newActor
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// update an actor
actors.put('/:actor_id', async (req, res) => {
    try {
        const updatedActors = await Actor.update(req.body, {
            where: {
                actor_id: req.params.actor_id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedActors} actor(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// delete an actor
actors.delete('/:actor_id', async (req, res) => {
    try {
        const deletedActors = await Actor.destroy({
            where: {
                actor_id: req.params.actor_id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedActors} actor(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// export
module.exports = actors