import { Link } from "react-router-dom";
import "./Header.scss";
import { useState } from "react";

export default function Header({ darkMode, setDarkMode, language, setLanguage }) {
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'es' : 'en');
    };

    return (
        <header className={`header ${darkMode ? 'dark' : 'light'}`} aria-label="Header">
            <div className="container">
                <div className="left">
                    <Link to="/" className="home" aria-label="Home">
                        <i className="fa fa-home"></i>
                    </Link>
                    <div className="title">
                        <h1>Jesus Cervantes Dev</h1>
                    </div>
                </div>
                <div className="right">
                    <label className="switch" aria-label="Toggle Dark Mode">
                        <input type="checkbox" checked={!darkMode} onChange={toggleDarkMode} />
                        <span className="slider round">
                            <i className={`fa ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
                        </span>
                    </label>
                    <button onClick={toggleLanguage} className="language-toggle" aria-label={language === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}>
                        {language === 'en' ? 'ES' : 'EN'}
                    </button>
                </div>
            </div>
        </header>
    );
}