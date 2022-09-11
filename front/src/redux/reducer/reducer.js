import {
    GET_ARCHIVED_NOTES,
    GET_NOTES, LOADING,
    CREATE_NOTE,
    ARCHIVE_NOTE,
    MODIFY_NOTE,
    GET_NOTE_BY_ID,
    CLEAR_NOTE_BY_ID,
    FILTERS
} from '../actions/noteActions'
import { GET_CATEGORIES } from '../actions/categoryActions'

const initialState = {
    categories: [],
    notes: [],
    note:{},
    archivedNotes: [],
    loading: false,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES: 
        return{
            ...state,
            categories: action.payload,
            loading:false,
        }
        case GET_ARCHIVED_NOTES: 
        return{
            ...state,
            archivedNotes: action.payload,
            loading:false,
        }
        case GET_NOTES: 
        return{
            ...state,
            notes: action.payload,
            loading:false,
        }
        case GET_NOTE_BY_ID: 
        return{
            ...state,
            note: action.payload,
            loading:false,
        }
        case CREATE_NOTE: 
        return{
            ...state,
            loading:false,
        }
        case MODIFY_NOTE: 
        return{
            ...state,
            loading:false,
        }
        case ARCHIVE_NOTE: 
        return{
            ...state,
            loading:false,
        }
        case CLEAR_NOTE_BY_ID: 
        return{
            ...state,
            note: {},
            loading:false,
        }
        case FILTERS: 
        return{
            ...state,
            notes: action.payload,
            loading:false,
        }
        case LOADING: 
        return{
            ...state,
            loading:true,
        }
        default:
            return state;
    }
};

export default rootReducer;