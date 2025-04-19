import React, { useState } from 'react';
import Task from './Task';

function App() {
  // State to store the list of tasks
  const [tasks, setTasks] = useState([
    { name: 'Task 1', description: 'This is the first task', completed: false },
    { name: 'Task 2', description: 'This is the second task', completed: false },
    { name: 'Task 3', description: 'This is the third task', completed: true }
  ]);

  // Method to toggle the completion status of a task
  const toggleCompletion = (index) => {
    const updatedTasks = tasks.map((task, idx) => {
      if (idx === index) {
        return { ...task, completed: !task.completed }; // Toggle the completion status
      }
      return task;
    });
    setTasks(updatedTasks); // Update the state with the new task list
  };

  return (
    <div>
      <h1>Task List</h1>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onComplete={() => toggleCompletion(index)} // Pass the toggle function as a prop to Task
        />
      ))}
    </div>
  );
}

export default App;
