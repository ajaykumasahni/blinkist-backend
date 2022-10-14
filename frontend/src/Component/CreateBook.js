import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createBook } from '../actions/bookActions'

const CreateBook = () => {

    const dispatch = useDispatch()
    const [author, setAuthor] = useState("")
    const [bookCategory, setBookCategory] = useState("")
    const [status, setStatus] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createBook(author,bookCategory,status))
    }

    useEffect(() => {

    },[])
  return (
    <div className="register">
      <div className="register_display"> 
      <form className='form_Submit' onSubmit={handleSubmit}>
        <center style={{fontSize: "35px"}}>Create Form</center>
       <input type="text" placeholder='Please enter the author' value={author} onChange={(e) => setAuthor(e.target.value)} />
        <input type="text" placeholder='Please enter the bookCategory' value={bookCategory} onChange={(e) => setBookCategory(e.target.value)} />
        <input type="text" placeholder='Please enter the status' value={status} onChange={(e) => setStatus(e.target.value)} />
        <button type='submit'>Create</button>
      </form>
      </div>
    </div>
  )
}

export default CreateBook
