import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNotes } from '../../../redux/actions/noteActions'
import './Notes.css'
import NotesCard from '../NotesCard/NotesCard'
import Loading from '../Loading/Loading'

export default function Notes() {

    const dispatch = useDispatch()
    
    useEffect( () => {
         dispatch(getNotes())
    }, [dispatch])
    
    const { notes ,loading} = useSelector((state) => state);

    if (loading) {
        return <Loading/>
    }

    return (
        <div className="cards">
            {notes.length ?
            notes.map((note) =>
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
