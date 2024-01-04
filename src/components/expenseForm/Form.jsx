import React,{useState} from 'react'
import "./form.css"
import axios from 'axios'

const Form = () => {
  const [formData, setFormData] =useState({
    date:'',
    category: '',
    amount: 0
  })

  const storedToken = JSON.parse(localStorage.getItem('token'));
  if (storedToken) {
    try {
      const user = JSON.parse(storedToken);
      // Use the 'user' variable as needed
    } catch (error) {
      console.error('Error parsing stored token:', error);
    }
  } else {
    console.error('No token found in localStorage');
  }

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setFormData({
        ...formData, 
        [name] : value
    })
  }

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    
      const dataToSend = {
        ...formData,
        user: user._id,
      };


      const response = await axios.post('http://localhost:5000/expense/add', dataToSend);

      
      console.log('Expense data submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting expense data:', error);
      
    }
  };


  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
      <div className="col-sm-10 col-md-4 bg-light rounded">
        <h2 className="text-center mt-5">Expense Form</h2>
        <form className="pt-4 pb-5 px-5" onSubmit={handleSubmit} >
          <input
            className="form-control mb-4"
            type="date"
            name="date"
            id="date"
            onChange={handleInputChange}
            value={formData.date} 
            />
          <select  className="form-control mb-4" name="category" id="category" onChange={handleInputChange} value={formData.category}>
            <option value="">---Select a category---</option>
            <option value="food">Food</option>
            <option value="transportation">Transportation</option>
            <option value="gym">Gym</option>
            <option value="education">Education</option>
          </select>
          <input
            className="form-control mb-4"
            type="number"
            name="amount"
            id="amount"
            placeholder="Amount"
            value={formData.amount}
            />
          <button type="submit" className="btn w-100">
            Submit
          </button>
          
        </form>
      </div>
    </div>
  )
}

export default Form