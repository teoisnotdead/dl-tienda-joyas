import { obtenerJoyas, filtrarJoyas } from "../models/joyas.model.js"

export const getJoyas = async (req, res, next) => {
    try {
        const joyas = await obtenerJoyas(req.query)
        res.json(joyas)
    } catch (error) {
        next(error)
    }
}

export const getJoyasFiltradas = async (req, res, next) => {
    try {
        const joyas = await filtrarJoyas(req.query)
        res.json(joyas)
    } catch (error) {
        next(error)
    }
}
