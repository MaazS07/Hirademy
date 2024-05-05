
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DeleteAssistant from './DeleteAssistant';
import AddAssistant from './AddAssistant';
import EditAssistant from './EditAssistant';

const Assistant = () => {
  const [assistants, setAssistants] = useState([]);
  const [editAssistant, setEditAssistant] = useState(null);

  useEffect(() => {
    const fetchAssistants = async () => {
      try {
        const res = await axios.get('/assistant');
        setAssistants(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAssistants();
  }, []);

  const addAssistant = newAssistant => {
    setAssistants([...assistants, newAssistant]);
  };

  const deleteAssistant = id => {
    setAssistants(assistants.filter(assistant => assistant._id !== id));
  };

  const updateAssistant = updatedAssistant => {
    setAssistants(assistants.map(assistant => (assistant._id === updatedAssistant._id ? updatedAssistant : assistant)));
    setEditAssistant(null);
  };

  return (
    <div>
      <h1>Assistant List</h1>
      <AddAssistant addAssistant={addAssistant} />
      {assistants.map(assistant => (
        <DeleteAssistant key={assistant._id} assistant={assistant} deleteAssistant={deleteAssistant} setEditAssistant={setEditAssistant} />
      ))}
      {editAssistant && <EditAssistant assistant={editAssistant} updateAssistant={updateAssistant} />}
    </div>
  );
};

export default Assistant;
