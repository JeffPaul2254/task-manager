import { useTheme } from '../context/ThemeContext';

function Header() {
  const { theme, toggleTheme } = useTheme();

  const buttonStyle = {
    backgroundColor: theme === "light" ? "#333" : "#f0f0f0",
    color: theme === "light" ? "#fff" : "#000",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer"
  };

  return (
    <header>
      <h1>Task Manager</h1>
      <button style={buttonStyle} onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </header>
  );
}

export default Header;