function TaskItem({ task, onDeleteTask, onToggleTask }) {
  const textStyle = {
    textDecoration: task.completed ? "line-through" : "none",
    opacity: task.completed ? 0.6 : 1
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
      />
      <span style={textStyle}>{task.text}</span>
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TaskItem;