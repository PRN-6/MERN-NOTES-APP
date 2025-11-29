import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import axios from 'axios'

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
            <div>
                {loading ? (
                    <p className='p-4'>Loading...</p>
                ) : (
                    notes.map((note, idx) => (
                        <div key={note._id || note.id || idx} className='p-4 border-b'>
                            {note.title}
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default HomePage