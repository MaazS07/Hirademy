
import React, { useState } from 'react';
import axios from 'axios';
const EditAssistant = ({assistant,updateAssistant}) => {



const [editAssistant, setEditAssistant] = useState({...assistant});


const handleChange=(e)=>
    
    {
        try{
            const{name,value}=e.target;
            setEditAssistant(prev=>(
                {
                   ...prev,
                   [name]:value

                })
            )
        }
        catch(err)
        {
            console.error(err)
        }
    }

    
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.put(`/assistant/${assistant._id}`, editAssistant);
      updateAssistant(res.data);
    } catch (err) {
      console.error(err);
    }
  };










  return (
    <>
     <h2>Edit Assistant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={editAssistant.name} onChange={handleChange} placeholder="Name" required /><br />
        <input type="text" name="mobile" value={editAssistant.mobile} onChange={handleChange} placeholder="Mobile" required /><br />
        <input type="email" name="email" value={editAssistant.email} onChange={handleChange} placeholder="Email" required /><br />
        <input type="number" name="salary" value={editAssistant.salary} onChange={handleChange} placeholder="Salary" required /><br />
        <input type="text" name="city" value={editAssistant.city} onChange={handleChange} placeholder="City" required /><br />
        <input type="text" name="country" value={editAssistant.country} onChange={handleChange} placeholder="Country" required /><br />
        <input type="text" name="department" value={editAssistant.department} onChange={handleChange} placeholder="Department" required /><br />
        <input type="text" name="role" value={editAssistant.role} onChange={handleChange} placeholder="Role" required /><br />
        <button type="submit">Save</button>
      </form>
    </>
  )
}

export default EditAssistant