import express from 'express'
import {createNote, deleteNote, getAllNotes, updateNote} from '../controllers/notesController.js'

const router = express.Router()

router.get('/' , getAllNotes)
router.post('/' , createNote)
router.put('/:id' , updateNote)
router.delete('/:id' , deleteNote)

// app.get('/api/notes' , (req , res) => {
//     res.status(200).send("Hello from backend")
// })

// app.listen(5001 , () => {
//     console.log("server is running on port 5001")
// })

// app.put('/api/notes/:id', (req , res) => {
//     res.status(200).json({message: "note deleted"})
// })

export default router