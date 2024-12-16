import express from "express"
import cors from "cors"
import router from "./routes/routes.js"

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.use(router)

export default app