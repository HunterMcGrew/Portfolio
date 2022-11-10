import React from 'react';
import useLocalStorage from "use-local-storage";
import "./reset.css";
import './App.css';
import "./main.css";
import Header from './components/header/Header';

function App() {

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }

  return (
    <div className="App">
      <Header
        theme={theme}
        switchTheme={switchTheme}
      />
    </div>
  );
}

export default App;
