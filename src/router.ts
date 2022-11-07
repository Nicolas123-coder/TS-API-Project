import { Router, Request, Response } from "express";
import { createMovie, findMovieById, findAllMovies, deleteMovie, updateMovie } from "./controllers/movieController";
import { validate } from "./middleware/handleValidation";
import { movieValidation } from "./middleware/movieValidation";

const router = Router()

export default router
    .get('/test', (req:Request, res:Response) => {
        res.status(200).send('API Working')
    })
    .post('/movie', movieValidation(), validate, createMovie)
    .get('/movie/:id', findMovieById)
    .get('/movie', findAllMovies)
    .delete('/movie/:id', deleteMovie)
    .patch('/movie/:id', movieValidation(), validate, updateMovie)