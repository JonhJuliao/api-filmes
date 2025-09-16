import { Router } from "express";

const filmesRouter = Router();

filmesRouter.get("/api/filmes", obterFilmes);


const filmes = [
        { id: 1, titulo: "Inception", diretor: "Christopher Nolan", ano: 2010 },
        { id: 2, titulo: "The Matrix", diretor: "The Wachowski Brothers", ano: 1999 }
    ]
function obterFilmes(req, res) {
    return res.status(200).json(filmes);
}

export default { filmesRouter };