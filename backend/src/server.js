import express from "express"
import notesRoutes from './routes/notesRoutes.js'
import { connectDB } from "./config/db.js"
import dotenv from "dotenv"
import cors from 'cors'


dotenv.config();

const app = express()
const PORT = process.env.PORT || 5000

connectDB()

// middleware
app.use(express.json()) // this will let you access request.body

// Enable CORS before routes so preflight and cross-origin requests work
app.use(
    cors({
        origin: 'http://localhost:5173',
    })
)

// routes
app.use('/api/notes', notesRoutes)

app.listen(PORT, () => {
    console.log('server is running on port:', PORT)
})

