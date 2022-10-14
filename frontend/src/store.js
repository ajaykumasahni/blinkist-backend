import { createStore, combineReducers, applyMiddleware } from "redux"

import thunk from "redux-thunk"


import { composeWithDevTools } from "redux-devtools-extension"
import { userReducer } from "./reducer/userReducer"
import { bookDetailsReducer, booksReducer, newBookReducer, updateReducer } from "./reducer/bookReducers"


const reducer = combineReducers({
    user: userReducer,
    create: newBookReducer,
    books: booksReducer,
    update: updateReducer,
    single: bookDetailsReducer,

})

let initialStage = {
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialStage,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store