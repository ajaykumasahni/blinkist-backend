import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateBook } from "../actions/bookActions";

const UpdateBook = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [author, setAuthor] = useState("");
  const [bookCategory, setBookCategory] = useState("");
  const [status, setStatus] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook(params.id, author, status, bookCategory));
  };

  useEffect(() => {}, []);
  return (
    <div className="register">
      <div className="register_display"> 
      <form className='form_Submit' onSubmit={handleSubmit}>
        <center style={{fontSize: "35px"}}>Update Form</center>
       <input type="text" placeholder='Please enter the author' value={author} onChange={(e) => setAuthor(e.target.value)} />
        <input type="text" placeholder='Please enter the bookCategory' value={bookCategory} onChange={(e) => setBookCategory(e.target.value)} />
        <input type="text" placeholder='Please enter the status' value={status} onChange={(e) => setStatus(e.target.value)} />
        <button type='submit'>Update</button>
      </form>
      </div>
    </div>
  );
};

export default UpdateBook;
