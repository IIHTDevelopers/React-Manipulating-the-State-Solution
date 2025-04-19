import React from 'react';

function Task({ task, onComplete }) {
  return (
    <div>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <p>Status: {task.completed ? 'Completed' : 'Incomplete'}</p>
      <button onClick={onComplete}>
        {task.completed ? 'Mark Incomplete' : 'Mark Completed'}
      </button>
    </div>
  );
}

export default Task;
