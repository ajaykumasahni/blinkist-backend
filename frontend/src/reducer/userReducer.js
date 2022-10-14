export const userReducer = (state = {user: {}}, action) => {
    switch(action.type){
        case "REGISTER_REQUEST":
        case "LOGIN_REQUEST":
        case "GET_USERDETAILS_REQUEST":
            return{
                loading: true,
                isAuthenticated: false
            }
        case "REGISTER_SUCCESS":
        case "LOGIN_SUCCESS":
        case "GET_USERDETAILS_SUCCESS":
            return{
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            }
        case "REGISTER_FAIL":
        case "LOGIN_FAIL":
            return {
                loading: false,
                user: null,
                isAuthenticated: false
            }
            case "GET_USERDETAILS_FAIL":
                return {
                  loading: false,
                  isAuthenticated: false,
                  user: null,
                  error: action.payload,
                };
        default:
            return state
    }
}