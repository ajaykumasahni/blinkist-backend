import './App.css';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom"
import Home from "./Component/Home.js"
import CreateBook from "./Component/CreateBook.js"
import UpdateBook from "./Component/UpdateBook.js"
import SingleBook from "./Component/SingleBook.js"
import Register from "./Component/Register.js"
import Login from "./Component/Login.js"
import Setting from "./Component/Setting.js"
import store from "./store"
import { useEffect } from 'react';
import { getUserDetails } from './actions/userActions';
import { useSelector } from 'react-redux';
import SavedBooked from "./Component/SavedBooked.js"

function App() {
  const {isAuthenticated, user} = useSelector((state => state.user))
  console.log(isAuthenticated)
  console.log(user)
  useEffect(() => {
    store.dispatch(getUserDetails());
  },[])
  return (
    <Router>
      <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/create/book' element={<CreateBook />} />
        <Route exact path='/update/:id' element={<UpdateBook />} />
        <Route exact path='/single/:id' element={<SingleBook />} />
        <Route exact path='/setting' element={<Setting />} />
        <Route exact path='/saved' element={<SavedBooked />} />
      </Routes>
    </Router>
  );
}

export default App;
