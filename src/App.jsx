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
      <TaskList tasks={tasks} onDeleteTask={deleteTask} onToggleTask={toggleTask} />
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