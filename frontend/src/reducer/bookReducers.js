export const newBookReducer = (state = {book: {}}, action) => {
    switch(action.type){
        case "CREATEBOOK_REQUEST":
            return{
                ...state,
                loading: true,
            }
        case "CREATEBOOK_SUCCESS":
            return{
                loading: false,
                success: action.payload.success,
                book: action.payload.book
            }
        case "CREATEBOOK_FAIL":
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const booksReducer = (state = { books: [] }, action) => {
    switch (action.type) {
        case "GETALL_REQUEST":
            return {
                loading: true,
                books: [],
            }
        case "GETALL_SUCCESS":
            return {
                loading: false,
                books: action.payload.books,
            }
        case "GETALL_FAIL":
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state;
    }
}


export const updateReducer = (state = {}, action) => {
    switch (action.type) {
        case "UPDATEBOOK_REQUEST":
            return {
                ...state,
                loading: true,
            }
       
        case "UPDATEBOOK_SUCCESS":
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            }
        case "UPDATEBOOK_FAIL":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case "UPDATEBOOk_RESET":
            return {
                ...state,
                isUpdated: false,
            }
        default:
            return state
    }
}

export const bookDetailsReducer = (state = { book: {} }, action) => {
    switch (action.type) {
        case "SINGLE_REQUEST":
            return {
                loading: true,
                ...state,
            }
        case "SINGLE_SUCCESS":
            return {
                loading: false,
                book: action.payload,
            }
        case "SINGLE_FAIL":
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}