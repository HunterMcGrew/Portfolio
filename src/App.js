import React from 'react';
import useLocalStorage from "use-local-storage";
import "./reset.css";
import './App.css';
// import "./main.css";
import Header from './components/header/Header';
import AboutMe from './components/aboutme/AboutMe';
import Social from './components/social/Social';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Footer from './components/footer/Footer';

function App() {

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }

  return (
    <div className="App" data-theme={theme}>
      <Header
        theme={theme}
        switchTheme={switchTheme}
      />
      <AboutMe 
        theme={theme}
      />
      <Social
        theme={theme}
      />
      <Projects
        theme={theme}
      />
      <Resume
        theme={theme}
      />
      <Footer
        theme={theme}
      />
    </div>
  );
}

export default App;
