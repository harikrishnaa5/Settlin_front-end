import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login container-fluid d-flex align-items-center justify-content-center vh-100">
      <div className="col-sm-10 col-md-4 bg-light rounded">
        <h2 className="text-center mt-5">Login</h2>
        <form className="pt-4 pb-5 px-5">
          <input
            className="form-control mb-4"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <input
            className="form-control mb-4"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <button type="button" className="btn w-100">
            Login
          </button>
          <p className="mt-3 text-center">
            Are you a new user? then <Link style={{textDecoration: "none", color: "gray"}} to="/register">Register</Link> here
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
