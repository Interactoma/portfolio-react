import { useState, useEffect, useContext } from "react";
import "./ToDoApp.scss";
import { LanguageContext } from "../../App";

export default function ToDoAPP() {
    const { language } = useContext(LanguageContext);
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [newTask, setNewTask] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);
    const [editingTask, setEditingTask] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        if (error) {
            setError(language === 'en' ? "Task cannot be empty" : "La tarea no puede estar vacía");
        }
    }, [language]);

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, newTask]);
            setNewTask("");
            setError("");
        } else {
            setError(language === 'en' ? "Task cannot be empty" : "La tarea no puede estar vacía");
        }
    };

    const removeTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const startEditing = (index) => {
        setEditingIndex(index);
        setEditingTask(tasks[index]);
        setError("");
    };

    const saveTask = (index) => {
        if (editingTask.trim()) {
            const updatedTasks = tasks.map((task, i) =>
                i === index ? editingTask : task
            );
            setTasks(updatedTasks);
            setEditingIndex(null);
            setEditingTask("");
            setError("");
        } else {
            setError(language === 'en' ? "Task cannot be empty" : "La tarea no puede estar vacía");
        }
    };

    return (
        <div className="todo-container" aria-label="ToDo Application">
            <h1>{language === 'en' ? 'ToDoAPP' : 'Aplicación de Tareas'}</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder={language === 'en' ? 'Add a new task' : 'Agregar una nueva tarea'}
                    className={error ? "error" : ""}
                    aria-label={language === 'en' ? 'New Task' : 'Nueva Tarea'}
                />
                <button onClick={addTask} aria-label={language === 'en' ? 'Add Task' : 'Agregar Tarea'}>
                    <i className="fa fa-plus"></i>
                </button>
            </div>
            {error && <p className="error-message" aria-live="polite">{error}</p>}
            <ul className="task-list">
                {tasks.map((task, index) => (
                    <li key={index}>
                        {editingIndex === index ? (
                            <input
                                type="text"
                                value={editingTask}
                                onChange={(e) => setEditingTask(e.target.value)}
                                onBlur={() => saveTask(index)}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        saveTask(index);
                                    }
                                }}
                                autoFocus
                                className={error ? "error" : ""}
                                placeholder={language === 'en' ? 'Edit task' : 'Editar tarea'}
                                aria-label={language === 'en' ? 'Edit Task' : 'Editar Tarea'}
                            />
                        ) : (
                            <span onDoubleClick={() => startEditing(index)}>{task}</span>
                        )}
                        <div className="task-actions">
                            <button onClick={() => startEditing(index)} aria-label={language === 'en' ? 'Edit Task' : 'Editar Tarea'}>
                                <i className="fa fa-pencil"></i>
                            </button>
                            <button onClick={() => removeTask(index)} aria-label={language === 'en' ? 'Remove Task' : 'Eliminar Tarea'}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
