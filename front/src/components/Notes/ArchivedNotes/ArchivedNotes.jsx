import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getArchivedNotes } from '../../../redux/actions/noteActions'
import './ArchivedNotes.css'
import NotesCard from '../NotesCard/NotesCard'
import Loading from '../Loading/Loading'

export default function ArchivedNotes() {
    const dispatch = useDispatch()
    
    useEffect( () => {
         dispatch(getArchivedNotes())
    }, [dispatch])
    
    const { archivedNotes,loading} = useSelector((state) => state);

    if (loading) {
        return <Loading/>
    }
    return (
        <div className="cards">
            {archivedNotes.length ?
            archivedNotes.map((note) =>
                <NotesCard
                    id={note.id}
                    title={note.title}
                    content={note.content}
                    isArchived={note.isArchived}
                    Categories={note.Categories}
                    key={note.id}
                />)
            : null}
        </div>
    )
}
