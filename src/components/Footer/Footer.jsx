import "./Footer.scss";
import { useContext, useState } from "react";
import { LanguageContext } from "../../App";

export default function Footer({ darkMode }) {
    const { language } = useContext(LanguageContext);
    const [showCookieMessage, setShowCookieMessage] = useState(true);

    const handleAcceptCookies = () => {
        setShowCookieMessage(false);
        // Add logic to handle cookie acceptance if necessary
    };

    return (
        <>
            <footer className={`footer ${darkMode ? 'dark' : 'light'}`} aria-label="Footer">
                <div className="social-icons" aria-label="Social Media Links">
                    <a href="https://github.com/Interactoma" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i className="fa fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/jesus-cervantes/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className="fa fa-linkedin"></i>
                    </a>
                </div>
                <p>
                    &copy; 2024 Jesus Cervantes Dev. {language === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}
                </p>
            </footer>
            {showCookieMessage && (
                <div className="cookie-modal" aria-live="polite">
                    <div className="cookie-content">
                        <p>{language === 'en' ? 'This site uses cookies to improve your experience.' : 'Este sitio utiliza cookies para mejorar su experiencia.'}</p>
                        <button onClick={handleAcceptCookies} aria-label={language === 'en' ? 'Accept Cookies' : 'Aceptar Cookies'}>
                            {language === 'en' ? 'Accept' : 'Aceptar'}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
