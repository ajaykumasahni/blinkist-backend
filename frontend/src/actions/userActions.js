import axios from "axios"

export const register = (username, email, password) => async(dispatch) => {
    try{
        dispatch({
            type: "REGISTER_REQUEST"
        })

        const config = {headers: {"Content-Type": "application/json"}}

        const {data} = await axios.post("/api/v1/register", {username, email, password}, config)

        dispatch({
            type: "REGISTER_SUCCESS",
            payload: data
        })
    }catch(error){
        dispatch({
            type: "REGISTER_FAIL",
            payload: error.response.data.message
        })
    }
}

export const login = (email, password) => async(dispatch) => {
    try{
        dispatch({
            type: "LOGIN_REQUEST"
        })

        const config = {headers: {"Content-Type": "application/json"}}

        const {data} = await axios.post("/api/v1/login", {email, password}, config)

        dispatch({
            type: "LOGIN_SUCCESS",
            payload: data
        })
    }catch(error){
        dispatch({
            type: "LOGIN_FAIL",
            payload: error.response.data.message
        })
    }
}

export const getUserDetails = () =>async(dispatch) => {
    try{
        dispatch({
            type: "GET_USERDETAILS_REQUEST"
        })

        const {data} = await axios.get(`/api/v1/details`)

        dispatch({
            type: "GET_USERDETAILS_SUCCESS",
            payload: data
        })
    }catch(error){
        dispatch({
            type: "GET_USERDETAILS_FAIL",
            payload: error.response.data.message,
        })
    }
}