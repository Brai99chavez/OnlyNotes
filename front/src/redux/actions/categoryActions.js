import axios from "axios";

export const GET_CATEGORIES = "GET_CATEGORIES";
export const LOADING = "LOADING";


export function getCategories  () {
    return async function (dispatch) {
        dispatch({type: LOADING})
        await axios.get('/categories/')
            .then(response => response.data)
            .then(data => dispatch({ type: GET_CATEGORIES, payload: data }))
            .catch(error => console.log(error))
    }
}
export function postCategoryToNote  (id,values) {
    return async function (dispatch) {
        await axios.get(`/notes/addCategory/${id}`,values)
            .catch(error => console.log(error))
    }
}