import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../actions/userActions";
import "./Register.scss";

const Register = () => {
  const {loading, isAuthenticated, user} = useSelector((state => state.user))
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(username, email, password));
  };

  useEffect(() => {
    if(isAuthenticated === true){
      navigate("/home")
    }
  }, [isAuthenticated, dispatch, user, navigate]);
  return (
    <div className="register">
      <div className="register_display">
        <form className="form_Submit" onSubmit={handleSubmit}>
          <center style={{fontSize: "30px"}}>Register Form</center>
          <input
            type="text"
            placeholder="Please enter the username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Please enter the Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Please enter the password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
