import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import { formatDate } from '../lib/Utils'

const NoteCard = ({note}) => {
  return (
    <Link to={`/note/${note._id}`}
    className='card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-orange-700 p-4'>
      <h2 className='card-title text-lg'>{note.title}</h2>
      <p className='text-base-content/70 line-clamp-3'>{note.content}</p>
      <div className='card-actions justify-between items-center mt-4'>
        <span className='text-sm text-base-content/60'>
            {formatDate(note.createdAt)}
        </span>
        <div className='flex items-center gap-1'>
            <PenSquareIcon className='size-4'/>
            <button className='btn btn-ghost btn-xs text-error'>
                <Trash2Icon className='size-4'/>
            </button>
        </div>
      </div>
    </Link>
    )
}

export default NoteCard