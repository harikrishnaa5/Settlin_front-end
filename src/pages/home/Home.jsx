import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='container-fluid d-flex align-items-center justify-content-center vh-100'>
      <div className="row">
        <div className="col-sm-10 col-md-6">
        <h1 className='text-center'>Welcome!!!</h1>
        <Link to="/register" className="btn">Register</Link>
        </div>
      </div>
    </div>
  )
}

export default Home