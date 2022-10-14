import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../actions/userActions";
import "./Login.scss";

const Login = () => {
  const {loading, isAuthenticated, user} = useSelector((state => state.user))
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if(isAuthenticated === true){
      navigate("/home")
    }
  }, [isAuthenticated, dispatch, user, navigate]);

  return (
    <div className="login">
      <div className="login_page_1_flex">
        <div className="welcome_div_1">
          <h1>Welcome Back</h1>
          <h3>Login to the Dashboard</h3>
        </div>
        <div className="form_1">
          <form onSubmit={handleSubmit} className="form__submit">
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
            <button type="submit">Login</button>
          </form>
        </div>
      </div>

      {/* images side */}

      <div>
        <img src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700" alt="" />
      </div>
    </div>
  );
};

export default Login;
