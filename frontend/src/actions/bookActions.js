import axios from "axios";

// create book actions
export const createBook = (author, bookCategory, status) => async(dispatch) => {
    try{
        dispatch({
            type: "CREATEBOOK_REQUEST"
        })

        const config = {headers: {"Content-Type": "application/json"}}

        const {data} = await axios.post("/api/v1/create/book", {author, bookCategory, status}, config)

        dispatch({
            type: "CREATEBOOK_SUCCESS",
            payload: data
        })
    }catch(error){
        dispatch({
            type: "CREATEBOOK_FAIL",
            payload: error.response.data.message
        })
    }
}

// get all book

export const findAllBook = (keyword="") => async(dispatch) => {
    try{
        dispatch({
            type: "GETALL_REQUEST"
        })

        const {data} = await axios.get( `/api/v1/books?keyword=${keyword}`)

        dispatch({
            type: "GETALL_SUCCESS",
            payload: data
        })
    }catch(error){
        dispatch({
            type: "GETALL_FAIL",
            payload: error.response.data.message
        })
    }
}

export const updateBook = (id,author, bookCategory, status) => async(dispatch) => {
    try{
        dispatch({
            type: "UPDATEBOOK_REQUEST"
        })

        const config = {headers: {"Content-Type": "application/json"}}

        const {data} = await axios.put(`/api/v1/update/${id}`, {author, bookCategory, status}, config)

        dispatch({
            type: "UPDATEBOOK_SUCCESS",
            payload: data
        })
    }catch(error){
        dispatch({
            type: "UPDATEBOOK_FAIL",
            payload: error.response.data.message
        })
    }
}

// get singleBook

export const singleBook = (id) => async(dispatch) => {
    try{
        dispatch({
            type: "SINGLE_REQUEST"
        })

        const {data} = await axios.get(`/api/v1/single/${id}`)

        dispatch({
            type: "SINGLE_SUCCESS",
            payload: data
        })
    }catch(error){
        dispatch({
            type: "SINGLE_FAIL",
            payload: error.response.data.message
        })
    }
}
