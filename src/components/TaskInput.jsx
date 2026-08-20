import { useState, useRef } from 'react';

function TaskInput({ onAddTask }) {
  const [task, setTask] = useState("");
  const inputRef = useRef(null);

  function handleAdd() {
    if (task.trim() === "") return;
    onAddTask(task);
    setTask("");
    inputRef.current.focus();
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TaskInput;