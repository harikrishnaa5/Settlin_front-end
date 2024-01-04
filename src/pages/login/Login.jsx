import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios"

const Login = () => {
  const { history } = useParams();
const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      
      const response = await axios.post("http://localhost:5000/user/login", credentials);

      const { token } = response.data;
      
      localStorage.setItem("token", token);

      // Redirect to the form page with user data
     navigate("/form")
    } catch (error) {
      console.error("Error during login:", error);
    }
  };


  return (
    <div className="login container-fluid d-flex align-items-center justify-content-center vh-100">
      <div className="col-sm-10 col-md-4 bg-light rounded">
        <h2 className="text-center mt-5">Login</h2>
        <form className="pt-4 pb-5 px-5" onSubmit={handleLogin}>
          <input
            className="form-control mb-4"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleInputChange}
          />
          <input
            className="form-control mb-4"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleInputChange}
          />
          <button type="submit" className="btn w-100">
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
