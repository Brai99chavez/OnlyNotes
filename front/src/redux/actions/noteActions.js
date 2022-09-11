import axios from 'axios';


export const GET_NOTES = "GET_NOTES";
export const GET_NOTE_BY_ID = "GET_NOTE_BY_ID";
export const GET_ARCHIVED_NOTES = "GET_ARCHIVED_NOTES";
export const DELETE_NOTE = "DELETE_NOTE";
export const LOADING = "LOADING";
export const CREATE_NOTE = "CREATE_NOTE";
export const MODIFY_NOTE = "MODIFY_NOTE";
export const ARCHIVE_NOTE = "ARCHIVE_NOTE";
export const CLEAR_NOTE_BY_ID = "CLEAR_NOTE_BY_ID";
export const FILTERS = "FILTERS";

export function getNotes() {
    return async function (dispatch) {
        dispatch({ type: LOADING })
        await axios.get('/notes')
            .then(response => response.data)
            .then(data => dispatch({ type: GET_NOTES, payload: data }))
            .catch(error => console.log(error))
    }
}
export function getNoteById(id) {
    return async function (dispatch) {
        dispatch({ type: LOADING })
        await axios.get(`/notes/${id}`)
            .then(response => response.data)
            .then(data => dispatch({ type: GET_NOTE_BY_ID, payload: data }))
            .catch(error => console.log(error))
    }
}
export function getArchivedNotes() {
    return async function (dispatch) {
        dispatch({ type: LOADING })
        await axios.get('/notes/archived/')
            .then(response => response.data)
            .then(data => dispatch({ type: GET_ARCHIVED_NOTES, payload: data }))
            .catch(error => console.log(error))
    }
}

export function deleteNote(id) {
    return async function (dispatch) {
        dispatch({ type: LOADING })
        await axios.delete(`/notes/delete/${id}`)
            .then(r => dispatch({ type: ARCHIVE_NOTE }))
            .catch(error => console.log(error))
    }
}
export function createNote(values) {
    return async function (dispatch) {
        dispatch({ type: LOADING })
        await axios.post(`/notes`, values)
            .then(r => dispatch({ type: CREATE_NOTE }))
    }
}
export function modifyNote(id, values) {
    return async function (dispatch) {
        dispatch({ type: LOADING })
        await axios.put(`/notes/modify/${id}`, values)
            .then(r => dispatch({ type: MODIFY_NOTE }))
    }
}

export function archiveNote(id) {
    return async function (dispatch) {
        dispatch({ type: LOADING })
        await axios.put(`/notes/archive/${id}`, { update: 'archivar' })
            .then(r => dispatch({ type: ARCHIVE_NOTE }))
    }
}
export function unarchiveNote(id) {
    return async function (dispatch) {
        dispatch({ type: LOADING })
        await axios.put(`/notes/archive/${id}`, { update: 'desarchivar' })
            .then(r => dispatch({ type: ARCHIVE_NOTE }))
    }
}
export function filterByCategory(category) {
    return async function (dispatch) {
        dispatch({ type: LOADING })
        await axios.get(`/notes/filter?category=${category}`)
            .then(r => dispatch({ type: FILTERS, payload: r.data }))
            .catch(err => console.log(err))
    }
}

export function clearNoteById() {
    return function (dispatch) {
        dispatch({ type: CLEAR_NOTE_BY_ID })
    }
}

