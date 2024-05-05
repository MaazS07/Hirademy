
import React from 'react';
import axios from 'axios';
const DeleteAssistant = ({ assistant, deleteAssistant, setEditAssistant }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`/assistant/${assistant._id}`);
      deleteAssistant(assistant._id);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = () => {
    setEditAssistant(assistant);
  };

  return (
    <div>
      <h3>{assistant.name}</h3>
      <p>Mobile: {assistant.mobile}</p>
      <p>Email: {assistant.email}</p>
      <p>Salary: {assistant.salary}</p>
      <p>City: {assistant.city}</p>
      <p>Country: {assistant.country}</p>
      <p>Department: {assistant.department}</p>
      <p>Role: {assistant.role}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteAssistant;
