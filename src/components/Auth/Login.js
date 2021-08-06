/** @format */

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
  const [userIndentifier, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const enterGuestDetails = () => {
    setUsername("admin");
    setPassword("Alohom0ra");
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    await checkUserPass(refineUserdata(userIndentifier), password);
    navigate(state?.from ? state.from : "/");
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
          <label htmlFor="userid">Username/Email</label>
          <input
            autoFocus={true}
            type="userid"
            id="userid"
            placeholder="Enter Username"
            value={userIndentifier}
            onChange={(e) => setUsername(e.target.value)}
            required></input>
          <small>{errorMessage}</small>
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
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
        <div style={{ textAlign: "center", padding: "1rem" }}>
          <button onClick={enterGuestDetails} className="guest-details">
            Enter Guest Details
          </button>
        </div>

        <p className="form-message">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
      <div
        className="form-button"
        style={{
          textAlign: "center",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}></div>
    </div>
  );
};
