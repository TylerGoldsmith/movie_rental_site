// dependencies
const movies = require('express').Router()
const db = require('../models')
const { Movie, Movie_Actor, Actor, Rental } = db
const { Op } =require('sequelize')

// find all movies by title
movies.get('/', async (req, res) => {
    try {
        const foundMovies = await Movie.findAll({
            order: [ [ 'title', 'DESC' ] ],
            where: {
                title: { [Op.like]: `%${req.query.title ? req.query.title : ''}%` }
            }
        })
        res.status(200).json(foundMovies)
    } catch (error) {
        res.status(500).json(error)
    }
})

// find a specific movie by title
movies.get('/:title', async (req, res) => {
    try {
        const foundMovies = await Movie.findOne({
            where: { title: req.params.name },
            include: [
                { 
                    model: Movie_Actor, 
                    as: "movie_actor", 
                    attributes: { exclude: ["movie_id"] },
                    include: {
                        model: Actor,
                        as: "actor",
                        attributes: { exclude: ["actor_id"]}
                        }
                },
            ],
            order: 
                [{ model: Movie, as: "movie" }, { model: Movie_Actor, as: "movie_actor" }, 'string', 'DESC']
        })
        res.status(200).json(foundMovies)
    } catch (error) {
        res.status(500).json(error)
    }
})

// create a movie
movies.post('/', async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new movie',
            data: newMovie
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// update a movie
movies.put('/:movie_id', async (req, res) => {
    try {
        const updatedMovies = await Movie.update(req.body, {
            where: {
                movie_id: req.params.movie_id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedMovies} movie(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// delete a movie
movies.delete('/:movie_id', async (req, res) => {
    try {
        const deletedMovies = await Band.destroy({
            where: {
                movie_id: req.params.movie_id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedMovies} movie(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = movies