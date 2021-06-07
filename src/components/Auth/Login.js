import React from "react";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../../contexts/auth-context";
import { useState, useEffect } from "react";
import "../../css/form.css";
import { Link } from "react-router-dom";
import { Dots } from "../Loader/Puff";
import { refineUserdata } from "./util/stringHandler";

export const Login = () => {
  const { checkUserPass, errorMessage, setErrorMessage, authLoader } =
    useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    await checkUserPass(refineUserdata(username), password);
    navigate(state?.from ? state.from : "/user");
  };

  useEffect(() => {
    setTimeout(() => setErrorMessage(""), 4000);
    return () => clearTimeout();
  }, [errorMessage]);

  return (
    <div className="form-container">
      <form id="form" className="form" onSubmit={loginHandler}>
        <h2>Login</h2>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            autoFocus={true}
            type="username"
            id="username"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
            required></input>
          <small>{errorMessage}</small>
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            required></input>
          <small>{errorMessage}</small>
        </div>
        <div className="form-button">
          <button type="submit" className="btn btn-primary btn--round ">
            {authLoader ? <Dots /> : "Sign in"}
          </button>
        </div>

        <p className="form-message">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};
