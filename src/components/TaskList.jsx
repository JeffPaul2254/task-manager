import TaskItem from './TaskItem';

function TaskList({ tasks, onDeleteTask, onToggleTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onToggleTask={onToggleTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;