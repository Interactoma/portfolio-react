import "./Home.scss";
import projects from "../../data/proyects";
import { useContext } from "react";
import { LanguageContext } from "../../App";

export default function Home() {
    const { language } = useContext(LanguageContext);

    return (
        <div className="home-container">
            <section className="about" aria-label="About Me">
                <h2>{language === 'en' ? 'About Me' : 'Sobre Mí'}</h2>
                <p>
                    {language === 'en' 
                        ? 'I am a Fullstack Developer with a passion for creating efficient and scalable web applications. I specialize in React and JavaScript, and have experience in both frontend and backend development.'
                        : 'Soy un Desarrollador Fullstack con pasión por crear aplicaciones web eficientes y escalables. Me especializo en React y JavaScript, y tengo experiencia en desarrollo frontend y backend.'}
                </p>
                <p>
                    {language === 'en' 
                        ? 'I enjoy solving complex problems and providing innovative solutions. My interdisciplinary background allows me to approach technical challenges from various perspectives, optimizing the quality and usability of the products I develop.'
                        : 'Disfruto resolviendo problemas complejos y proporcionando soluciones innovadoras. Mi formación interdisciplinaria me permite abordar desafíos técnicos desde diversas perspectivas, optimizando la calidad y usabilidad de los productos que desarrollo.'}
                </p>
            </section>
            <section className="contact" aria-label="Contact">
                <h2>{language === 'en' ? 'Contact' : 'Contacto'}</h2>
                <p>{language === 'en' ? 'Phone: 5543195580' : 'Teléfono: 5543195580'}</p>
                <p>{language === 'en' ? 'Email: zezoniko@gmail.com' : 'Correo electrónico: zezoniko@gmail.com'}</p>
            </section>
            <section className="projects" aria-label="Projects">
                <h2>{language === 'en' ? 'Projects' : 'Proyectos'}</h2>
                <div className="project-cards">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card" onClick={() => window.location.href = project.link} aria-label={project.title[language]}>
                            {project.image ? (
                                <img src={project.image} alt={project.title[language]} />
                            ) : (
                                <p>{project.description[language]}</p>
                            )}
                            <h3>{project.title[language]}</h3>
                            <a href={project.link}>{language === 'en' ? 'View Project' : 'Ver Proyecto'}</a>
                        </div>
                    ))}
                </div>
            </section>
            <section className="skills" aria-label="Skills">
                <h2>{language === 'en' ? 'Skills' : 'Habilidades'}</h2>
                <div className="skills-category">
                    <h3>{language === 'en' ? 'Languages' : 'Lenguajes'}</h3>
                    <ul className="skills-list">
                        <li>JavaScript</li>
                        <li>C++</li>
                        <li>SQL (SQL Server, MySQL)</li>
                    </ul>
                </div>
                <div className="skills-category">
                    <h3>{language === 'en' ? 'Frameworks & Libraries' : 'Frameworks y Librerías'}</h3>
                    <ul className="skills-list">
                        <li>React</li>
                        <li>Redux</li>
                        <li>Angular</li>
                        <li>Bootstrap</li>
                        <li>LESS</li>
                        <li>SASS</li>
                        <li>Material UI</li>
                        <li>Leaflet</li>
                        <li>.NET (C#)</li>
                        <li>Django</li>
                    </ul>
                </div>
                <div className="skills-category">
                    <h3>{language === 'en' ? 'Databases' : 'Bases de Datos'}</h3>
                    <ul className="skills-list">
                        <li>SQL Server</li>
                        <li>MySQL</li>
                        <li>PostgreSQL</li>
                    </ul>
                </div>
                <div className="skills-category">
                    <h3>{language === 'en' ? 'Other Skills' : 'Otras Habilidades'}</h3>
                    <ul className="skills-list">
                        <li>Express</li>
                        <li>Node.js</li>
                        <li>Python</li>
                        <li>Nginx</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}