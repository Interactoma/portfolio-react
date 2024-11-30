import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from './pages/Home/Home';
import ToDoAPP from './pages/ToDoApp/ToDoAPP';
import 'font-awesome/css/font-awesome.min.css';
import { useState, createContext, useEffect } from 'react';

export const LanguageContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false); // Default to light mode
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    document.body.classList.toggle('light-mode', !darkMode);
  }, [darkMode]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Router>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} language={language} setLanguage={setLanguage} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/todoapp" element={<ToDoAPP />} />
        </Routes>
        <Footer darkMode={darkMode} />
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;
