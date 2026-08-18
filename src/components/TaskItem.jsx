function TaskItem({ task, onDeleteTask }) {
  return (
    <li>
      {task.text}
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TaskItem;