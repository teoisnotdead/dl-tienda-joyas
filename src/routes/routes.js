import { Router } from "express"
import { getJoyas, getJoyasFiltradas } from "../controllers/joyas.controller.js"
import logger from "../middlewares/logger.js"

const router = Router()

router.use(logger)

router.get("/joyas", getJoyas)
router.get("/joyas/filtros", getJoyasFiltradas)

export default router
