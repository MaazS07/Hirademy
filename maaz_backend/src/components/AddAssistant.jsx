import React, { useState } from 'react'
import axios from 'axios';

const AddAssistant = ({addAssistant}) => {

const [assistant, setAssistant] = useState(
    {
        name: '',
        mobile: '',
        email: '',
        salary: 0,
        city: '',
        country: '',
        department: '',
        role: '' 
    }
);

const handleChange=()=>
    {
        const {name,value} =e.target;
        setAssistant(prev=>(
            {
                ...prev,
                [name]:value
            }
        ))

    }

const handleSubmit=async (e)=>
    {
        e.preventDefault();
      

        try{
            const res=await axios.post('/assistant',assistant)
            addAssistant(res.data);
        }
        catch(err)
        {
            console.error(err);
        }
    }


  return (
    <>
    <h2>Add Assistan</h2>
    <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={assistant.name} onChange={handleChange} placeholder="Name" required /><br />
        <input type="text" name="mobile" value={assistant.mobile} onChange={handleChange} placeholder="Mobile" required /><br />
        <input type="email" name="email" value={assistant.email} onChange={handleChange} placeholder="Email" required /><br />
        <input type="number" name="salary" value={assistant.salary} onChange={handleChange} placeholder="Salary" required /><br />
        <input type="text" name="city" value={assistant.city} onChange={handleChange} placeholder="City" required /><br />
        <input type="text" name="country" value={assistant.country} onChange={handleChange} placeholder="Country" required /><br />
        <input type="text" name="department" value={assistant.department} onChange={handleChange} placeholder="Department" required /><br />
        <input type="text" name="role" value={assistant.role} onChange={handleChange} placeholder="Role" required /><br />
        <button type="submit">Add</button>
      </form>
    
    </>
  )
}

export default AddAssistant