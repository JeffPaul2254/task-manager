import { useState } from 'react';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function AppContent() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Practice useRef", completed: false },
    { id: 3, text: "Build project", completed: false }
  ]);
  const [filter, setFilter] = useState("all");
  const { theme } = useTheme();

  function addTask(taskText) {
    const newTask = { id: Date.now(), text: taskText, completed: false };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function clearCompleted() {
    setTasks(tasks.filter((task) => !task.completed));
  }

  const visibleTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const containerStyle = {
    minHeight: "100vh",
    backgroundColor: theme === "light" ? "#ffffff" : "#1e1e1e",
    color: theme === "light" ? "#000000" : "#f0f0f0",
    padding: "20px",
    transition: "background-color 0.3s, color 0.3s"
  };

  return (
    <div style={containerStyle}>
      <Header />
      <TaskInput onAddTask={addTask} />

      <div style={{ margin: "12px 0" }}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      <TaskList tasks={visibleTasks} onDeleteTask={deleteTask} onToggleTask={toggleTask} />
      <button onClick={clearCompleted} style={{ marginTop: "12px" }}>
        Clear Completed
      </button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;