import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import axios from 'axios'
import NoteCard from '../components/NoteCard'

const HomePage = () => {
    const [notes, setNotes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/notes')
                console.log(res.data)
                setNotes(res.data)
            } catch (error) {
                console.log('error fetching', error)
            } finally {
                setLoading(false)
            }
        }

        fetchNote()
    }, [])
    return (
        <div className='min-h-screen'>
            <NavBar />
            <div className='max-w-7xl mx-auto p-4 mt-6'>
                {loading && <div className='text-center text-primary py-10'>loading...</div>}

                {notes.length > 0  && (
                    <div className='grid grid-cols-1 mid:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {notes.map((note, idx) => (
                            <NoteCard key={note._id} note={note}/>
                        ))}
                    </div>

                )}
            </div>
        </div>
    )
}

export default HomePage