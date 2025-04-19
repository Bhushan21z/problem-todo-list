import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input type="text" placeholder="Enter a task" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <ul>{tasks.map((t, index) => (<li key={index}>{t}</li>))}</ul>
    </div>
  );
}

export default App;
