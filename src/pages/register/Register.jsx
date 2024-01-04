import React, {useState} from "react";
import "./register.css";
import { Link } from "react-router-dom";
import axios from "axios"
import { useNavigate } from "react-router-dom";



const Register = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setUser({
      ...user,
      [name]:value
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    const {fullName, email, password} = user
    if(fullName&&email&&password){
      try {
        let response = await axios.post('http://localhost:5000/user/register', user)
        if(response.status === 200){
          console.log(response.data);
          navigate("/login")
          setUser({
            fullName: '',
            email: '',
            password: ''
          })
         
        }
      } catch (error) {
        console.log("server error");
        setUser({
          fullName: '',
          email: '',
          password: ''
        })
      } 
    }
  }
  return (
    <div className="register container-fluid d-flex align-items-center justify-content-center vh-100">
      <div className="col-sm-10 col-md-4 bg-light rounded">
        <h2 className="text-center mt-5">Register</h2>
        <form className="pt-4 pb-5 px-5" onSubmit={handleSubmit}>
          <input
            className="form-control mb-4"
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Full Name"
            onChange={handleChange}
            value={user.fullName}
          />
          <input
            className="form-control mb-4"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
            value={user.email}
          />
          <input
            className="form-control mb-4"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
            value={user.password}
          />
          <button type="submit" className="btn w-100">
            Register
          </button>
          <p className="mt-3 text-center">
            Already a user? then <Link style={{textDecoration: "none", color: "gray"}} to="/login">Login</Link> here
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
