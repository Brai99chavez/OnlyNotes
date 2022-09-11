import React, { useEffect } from 'react'
import './NotesCard.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { archiveNote, deleteNote, getArchivedNotes, getNotes, unarchiveNote } from '../../../redux/actions/noteActions'
import icon from '../../../img/note-icon.png'
import Swal from 'sweetalert2'

export default function NotesCard({ id, title, content, isArchived ,Categories}) {
    const dispatch = useDispatch()

    useEffect(() => {

    }, [dispatch])

    async function handleDelete(id) {
        Swal.fire({
            title: 'Do you want delete this note?',
            showDenyButton: true,
            confirmButtonText: 'yes',
            denyButtonText: `No`,
        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                await dispatch(deleteNote(id))
                await dispatch(getNotes())
                Swal.fire('Deleted!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Not deleted!', '', 'info')
            }
        })

    }
    async function handleDeleteArchived(id) {
        Swal.fire({
            title: 'Do you want delete this note?',
            showDenyButton: true,
            confirmButtonText: 'yes',
            denyButtonText: `No`,
        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                await dispatch(deleteNote(id))
                await dispatch(getArchivedNotes())
                Swal.fire('Deleted!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Not deleted!', '', 'info')
            }
        })
    }

    function handleArchive(id) {
        Swal.fire({
            title: 'Do you want archive this note?',
            showDenyButton: true,
            confirmButtonText: 'yes',
            denyButtonText: `No`,
        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                await dispatch(archiveNote(id))
                await dispatch(getNotes())
                Swal.fire('Archived!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Note not Archived!', '', 'info')
            }
        })

    }
    async function handleUnarchive(id) {

        Swal.fire({
            title: 'Do you want unarchive this note?',
            showDenyButton: true,
            confirmButtonText: 'yes',
            denyButtonText: `No`,
        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                await dispatch(unarchiveNote(id))
                await dispatch(getArchivedNotes())
                Swal.fire('Unarchived!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('note not unarchived!', '', 'info')
            }
        })
    }
    return (
        <div className='card' key={id}>
            <div className='card-icon'>
                <img src={icon} alt="" />
            </div>
            <div className='card-content'>
                <div className='card-title'><p>{title}</p></div>
                <div className='card-desc' ><p>{content}</p></div>
                <div className='card-label grid grid-cols-3' >{Categories && Categories.length > 0 && Categories.map((c,i) =><p className='w-30' key={i}><i className="fa-solid fa-tag"></i>{c.name}</p> )}</div>
                <div className='card-buttons'>
                    {isArchived === false ?
                        <button onClick={() => handleArchive(id)}><i className="fa-solid fa-box-archive mx-2"></i></button>
                        : <button onClick={() => handleUnarchive(id)}><i className="fa-solid fa-box-archive mx-2"></i></button>}

                    <Link to={`/modify-card/${id}`}><i className="fa-solid fa-pen-to-square mx-2"></i></Link>
                    {isArchived === false ?
                        <button onClick={() => handleDelete(id)}><i className="fa-solid fa-trash-can mx-2"></i></button> :
                        <button onClick={() => handleDeleteArchived(id)}><i className="fa-solid fa-trash-can mx-2"></i></button>
                    }
                </div>
            </div>
        </div>
    )
}
